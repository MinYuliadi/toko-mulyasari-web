import {useContext} from 'react';
import {DataContext} from '../handlers/stateManagement';
import FunctionHandler from '../handlers/functionHandler';

const DetailProductCard = () => {
  const {detailProduct, dataProduct} = useContext(DataContext);
  const {currencyFormat} = FunctionHandler();
  return (
    <>
      <div className="w-full h-[25rem] flex px-[10rem] text-gray-600 font-medium text-lg">
        <div className="flex w-full">
          <div className="h-full p-5 pt-0">
            <img src={detailProduct.image_url} alt="" />
          </div>
          <div className="w-full flex flex-col gap-3 p-6 justify-start items-start">
            <span>{detailProduct.name}</span>
            <span>Kategori : {detailProduct.category}</span>
            <span>Harga : {currencyFormat(detailProduct.price)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProductCard;
