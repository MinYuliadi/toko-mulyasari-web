import {DataContext} from './stateManagement';
import {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';

const FunctionHandler = () => {
  const {
    dataProduct,
    setDataProduct,
    currentID,
    setCurrentID,
    detailProduct,
    setDetailProduct,
    inputForm,
    setInputForm,
    inputDetailProduct,
    setInputDetailProduct,
    countCookiesProduct,
    setCountCookiesProduct,
    inputSearch,
    setInputSearch
  } = useContext(DataContext);

  const history = useHistory();
  let DateTimeNow = new Date().toLocaleString();

  useEffect(() => {
    setInputDetailProduct({...inputDetailProduct, dateTime: DateTimeNow});
  }, [inputDetailProduct.qty, inputDetailProduct.descriptionRequest]);

  const currencyFormat = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(number);
  };

  const handleChangeSearch = (key, event) => {
    setInputSearch({...inputSearch, [key]: event.target.value});
  };

  const handleDetail = (event) => {
    const clickedID = parseInt(event.target.value);
    Cookies.set('clickedID', clickedID);
    const idFromCookie = parseInt(Cookies.get('clickedID'));
    const findProductbyID = dataProduct.find((x) => x.id === idFromCookie);
    Cookies.set('clickedProduct', JSON.stringify(findProductbyID));
    setDetailProduct(findProductbyID);
    history.push(`/detail-product/${idFromCookie}`);
  };

  const handleChange = (key, event) => {
    setInputForm({...inputForm, [key]: event.target.value});
  };

  const handleChangeDetailProduct = (key, event) => {
    setInputDetailProduct({...inputDetailProduct, [key]: event.target.value});
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    Cookies.set('user', JSON.stringify(inputForm));
    history.push(`/product`);
    Cookies.set(
      'productCart',
      JSON.stringify([
        {
          name: '',
          phoneNumber: '',
          address: '',
          descriptionRequest: '',
          id: '',
          page: '',
          price: '',
          qty: '',
          dateTime: ''
        }
      ])
    );
    setInputForm({
      name: '',
      phoneNumber: '',
      address: ''
    });
  };

  const handleAddtoCart = (event) => {
    event.preventDefault();
    if (inputDetailProduct.qty < 1) {
      alert('minimal pemesanan Product (Quantity) adalah 1');
    } else if (inputDetailProduct.qty >= 1) {
      const parseClickedProduct = JSON.parse(Cookies.get(`clickedProduct`));
      const parseClickedID = parseInt(Cookies.get('clickedID'));
      const parseProductCart = JSON.parse(Cookies.get('productCart'));
      Cookies.set(
        `product${parseClickedID}`,
        JSON.stringify({...parseClickedProduct, ...inputDetailProduct})
      );
      const parseFromProductID = JSON.parse(Cookies.get(`product${parseClickedID}`));

      Cookies.set('productCart', JSON.stringify([...parseProductCart, parseFromProductID]));
      alert('Sukses, belanjaanmu sudah dimasukan kedalam keranjang');
      window.location.reload();
    }
  };

  const handleDelete = (event) => {
    const deletedID = event.target.value;
    const parseFromProductCart = JSON.parse(Cookies.get('productCart'));
    const filterDeletedCart = parseFromProductCart.filter((x) => x.dateTime !== deletedID);

    Cookies.set('productCart', JSON.stringify(filterDeletedCart));
    console.log(JSON.parse(Cookies.get('productCart')));
    window.location.reload();
  };

  const handleCheckOut = () => {
    const token = '5129558354:AAH1NVwWiTxtLK06K9WIHsO936gOdpIo3b4';
    const chatID = 5109962924;
    // const chatID = -1001684634338;
    const parseUserCookies = JSON.parse(Cookies.get('user'));
    const parseProductCart = JSON.parse(Cookies.get('productCart'));
    const filterParseProductCart = parseProductCart.filter((x) => x.name !== '');
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=Nama%20Customer:%20${
      parseUserCookies.name
    }%0ANomor%20WhatsApp:%20${parseUserCookies.phoneNumber}%0AAlamat%20Customer:%20${
      parseUserCookies.address
    }%0A%0ABarang%20yang%20dipesan:%0A%0A${filterParseProductCart.map((item, index) => {
      return `No:%20${index + 1}%0ANama:%20${item.name}%0AJumlah:%20${item.qty}%0AKeterangan:%20${
        item.descriptionRequest
      }%0A%0A`;
    })}`;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    alert(
      'Admin telah menerima pesananmu, mohon ditunggu ya. Admin akan mengirim pesan kepadamu lewat aplikasi Whatsapp.'
    );
    Cookies.set(
      'productCart',
      JSON.stringify([
        {
          name: '',
          phoneNumber: '',
          address: '',
          descriptionRequest: '',
          id: '',
          page: '',
          price: '',
          qty: '',
          dateTime: ''
        }
      ])
    );
    history.push(`/product`);
  };

  return {
    handleDetail,
    currencyFormat,
    handleChange,
    handleSubmitForm,
    handleChangeDetailProduct,
    handleAddtoCart,
    handleDelete,
    handleCheckOut,
    handleChangeSearch
  };
};

export default FunctionHandler;
