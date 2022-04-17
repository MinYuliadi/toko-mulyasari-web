import SearchComponent from '../components/searchComponent';
import ListProductComponent from '../components/listProductComponent';
import {useContext} from 'react';
import {DataContext} from '../handlers/stateManagement';

const ProductPage = () => {
  const {dataProduct, inputSearch} = useContext(DataContext);

  const searchQueryInput = dataProduct.filter(
    (obj) =>
      obj.category.toLowerCase().indexOf(inputSearch.categoryQuery.toLowerCase()) >= 0 &&
      obj.name.toLowerCase().indexOf(inputSearch.searchQuery.toLowerCase()) >= 0
  );

  const listProduct = searchQueryInput.map((item, index) => (
    <ListProductComponent
      key={index}
      image_url={item.image_url}
      name={item.name}
      price={item.price}
      id={item.id}
    />
  ));

  return (
    <>
      <SearchComponent />
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:p-7 md:p-10 lg:p-12 w-full h-full p-2 gap-3">
        {listProduct}
      </ul>
    </>
  );
};

export default ProductPage;
