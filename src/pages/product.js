import SearchComponent from '../components/searchComponent';
import ListProductComponent from '../components/listProductComponent';

const ProductPage = () => {
  return (
    <>
      <SearchComponent key={1} />
      <ListProductComponent key={2} />
    </>
  );
};

export default ProductPage;
