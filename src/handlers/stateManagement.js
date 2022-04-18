import {createContext, useState} from 'react';
import product1 from '../assets/product/images40.jpg';
import product2 from '../assets/product/images (41).jpg';
import product3 from '../assets/product/images (42).jpg';
import product4 from '../assets/product/images (43).jpg';
import product5 from '../assets/product/images (44).jpg';
import product6 from '../assets/product/images (45).jpg';
import product7 from '../assets/product/images (46).jpg';
import product8 from '../assets/product/images (48).jpg';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [currentID, setCurrentID] = useState(null);
  const [detailProduct, setDetailProduct] = useState({});
  const [countCookiesProduct, setCountCookiesProduct] = useState(0);
  const [inputSearch, setInputSearch] = useState({
    categoryQuery: '',
    searchQuery: ''
  });
  const [inputForm, setInputForm] = useState({
    name: '',
    phoneNumber: '',
    address: ''
  });
  const [inputDetailProduct, setInputDetailProduct] = useState({
    qty: 1,
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
      image_url: `${product1}`
    },
    {
      page: 1,
      id: 2,
      name: 'Fiber creame ellenka 450gr',
      category: 'Creamer',
      price: 44000,
      image_url: `${product2}`
    },
    {
      page: 1,
      id: 3,
      name: 'Gulaku 1kg',
      category: 'Gula',
      price: 13500,
      image_url: `${product3}`
    },
    {
      page: 1,
      id: 4,
      name: 'Teh tji jasmine tea',
      category: 'Teh',
      price: 10300,
      image_url: `${product4}`
    },
    {
      page: 1,
      id: 5,
      name: 'Good day moccacino (50x20gr)',
      category: 'Kopi',
      price: 60000,
      image_url: `${product5}`
    },
    {
      page: 1,
      id: 6,
      name: 'Indocafe coffeemix 3in1 (30x20gr)',
      category: 'Kopi',
      price: 38000,
      image_url: `${product6}`
    },
    {
      page: 1,
      id: 7,
      name: 'Kopi kapal api special mix 10pcs',
      category: 'Kopi',
      price: 11900,
      image_url: `${product7}`
    },
    {
      page: 1,
      id: 8,
      name: 'Teh sariwangi celup 50s',
      category: 'Teh',
      price: 10200,
      image_url: `${product8}`
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
        setCountCookiesProduct,
        inputSearch,
        setInputSearch
      }}>
      {props.children}
    </DataContext.Provider>
  );
};
