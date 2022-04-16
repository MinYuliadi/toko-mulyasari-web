import {createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [currentID, setCurrentID] = useState(null);
  const [detailProduct, setDetailProduct] = useState({});
  const [countCookiesProduct, setCountCookiesProduct] = useState(0);
  const [inputForm, setInputForm] = useState({
    name: '',
    phoneNumber: '',
    address: ''
  });
  const [inputDetailProduct, setInputDetailProduct] = useState({
    qty: 0,
    descriptionRequest: '',
    dateTime: ''
  });
  const [dataProduct, setDataProduct] = useState([
    {
      page: 1,
      id: 1,
      name: 'Indomilk susu kental manis kaleng',
      category: 'Susu',
      price: 10000,
      image_url: '/product/images40.jpg'
    },
    {
      page: 1,
      id: 2,
      name: 'Fiber creame ellenka 450gr',
      category: 'Creamer',
      price: 44000,
      image_url: '/product/images (41).jpg'
    },
    {
      page: 1,
      id: 3,
      name: 'Gulaku 1kg',
      category: 'Gula',
      price: 13500,
      image_url: '/product/images (42).jpg'
    },
    {
      page: 1,
      id: 4,
      name: 'Teh tji jasmine tea',
      category: 'Teh',
      price: 10300,
      image_url: '/product/images (43).jpg'
    },
    {
      page: 1,
      id: 5,
      name: 'Good day moccacino (50x20gr)',
      category: 'Kopi',
      price: 60000,
      image_url: '/product/images (44).jpg'
    },
    {
      page: 1,
      id: 6,
      name: 'Indocafe coffeemix 3in1 (30x20gr)',
      category: 'Kopi',
      price: 38000,
      image_url: '/product/images (45).jpg'
    },
    {
      page: 1,
      id: 7,
      name: 'Kopi kapal api special mix 10pcs',
      category: 'Kopi',
      price: 11900,
      image_url: '/product/images (46).jpg'
    },
    {
      page: 1,
      id: 8,
      name: 'Teh sariwangi celup 50s',
      category: 'Teh',
      price: 10200,
      image_url: '/product/images (48).jpg'
    }
  ]);

  return (
    <DataContext.Provider
      value={{
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
        setCountCookiesProduct
      }}>
      {props.children}
    </DataContext.Provider>
  );
};
