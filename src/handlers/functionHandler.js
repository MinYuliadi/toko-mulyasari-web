import {DataContext} from './stateManagement';
import {useContext} from 'react';
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
    setInputForm
  } = useContext(DataContext);

  const history = useHistory();

  const currencyFormat = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(number);
  };

  const handleDetail = (event) => {
    const clickedID = parseInt(event.target.value);
    const findProductbyID = dataProduct.find((x) => x.id === clickedID);
    setDetailProduct(findProductbyID);
    history.push(`/detail-product/${clickedID}`);
  };

  const handleChange = (key, event) => {
    setInputForm({...inputForm, [key]: event.target.value});
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    Cookies.set('user', JSON.stringify(inputForm));
    history.push(`/product`);
  };

  return {
    handleDetail,
    currencyFormat,
    handleChange,
    handleSubmitForm
  };
};

export default FunctionHandler;
