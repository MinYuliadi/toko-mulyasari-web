import DetailProductCard from '../components/detailProductCard';
import ListProductComponent from '../components/listProductComponent';
import SearchComponent from '../components/searchComponent';

const DetailProduct = () => {
  return (
    <>
      <DetailProductCard />
      <div className="pt-24">
        <SearchComponent />
      </div>
      <ListProductComponent />
    </>
  );
};

export default DetailProduct;
