import DetailProductCard from '../components/detailProductCardComponent';
import ProductPage from './productPage';

const DetailProduct = () => {
  return (
    <>
      <DetailProductCard />
      <div className="pt-24">
        <ProductPage />
      </div>
    </>
  );
};

export default DetailProduct;
