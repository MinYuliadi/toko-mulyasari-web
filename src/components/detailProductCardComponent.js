import {useContext} from 'react';
import {DataContext} from '../handlers/stateManagement';
import FunctionHandler from '../handlers/functionHandler';
import InputTextAreaComponent from './inputTextAreaComponent';
import InputTextComponent from './inputTextComponent';
import Cookies from 'js-cookie';

const DetailProductCard = () => {
  const {inputDetailProduct} = useContext(DataContext);
  const {currencyFormat, handleChangeDetailProduct, handleAddtoCart} = FunctionHandler();
  const parseFromJSON = JSON.parse(Cookies.get('clickedProduct'));

  return (
    <>
      <div className="w-full h-full lg:h-[25rem] flex px-5 lg:px-[10rem] text-gray-600 font-medium text-lg">
        <div className="flex flex-col items-center justify-center lg:flex-row w-full">
          <div className="h-full p-5 pt-0">
            <img className="h-[15rem] lg:h-fit" src={parseFromJSON.image_url} alt="" />
          </div>
          <div className="w-full flex flex-col gap-3 items-center justify-center p-6 lg:justify-start lg:items-start">
            <span>{parseFromJSON.name}</span>
            <span>Kategori : {parseFromJSON.category}</span>
            <span>Harga : {currencyFormat(parseFromJSON.price)}</span>
            <form onSubmit={handleAddtoCart} className="flex flex-col gap-2">
              <InputTextComponent
                classLabel="text-sm"
                labelName="Quantity"
                type="number"
                classInput="focus:outline-none border shadow-md text-sm w-[10rem]"
                valInput={inputDetailProduct.qty}
                param={(e) => handleChangeDetailProduct('qty', e)}
              />
              <InputTextAreaComponent
                classLabel=""
                labelName="Keterangan"
                classTextArea="h-[8rem] text-sm w-[20rem] focus:outline-none border shadow-md"
                valueText={inputDetailProduct.description}
                param={(e) => handleChangeDetailProduct('descriptionRequest', e)}
              />
              <button className="p-2 bg-indigo-600 flex gap-3 items-center justify-center text-white font-medium text-base rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Tambah ke Keranjang
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProductCard;
