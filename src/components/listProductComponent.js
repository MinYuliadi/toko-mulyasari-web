import {useContext} from 'react';
import {DataContext} from '../handlers/stateManagement';
import FunctionHandler from '../handlers/functionHandler';

const ListProductComponent = () => {
  const {dataProduct} = useContext(DataContext);
  const {handleDetail, currencyFormat} = FunctionHandler();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:p-7 md:p-10 lg:p-12 w-full h-full p-2 gap-3">
      {dataProduct.map((item, index) => {
        return (
          <>
            <div key={index + item.id} className="gap-2 flex flex-col pb-5">
              <div className="border shadow-md p-4 h-[18rem]">
                <div className="flex justify-center w-full">
                  <img className="h-[10rem]" src={`${item.image_url}`} alt="" />
                </div>
                <p>{item.name}</p>
                <p>Harga : {currencyFormat(item.price)}</p>
              </div>
              <button
                onClick={handleDetail}
                value={item.id}
                className="bg-indigo-600 rounded-md w-full h-8 items-end text-white">
                Lihat Detail
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ListProductComponent;
