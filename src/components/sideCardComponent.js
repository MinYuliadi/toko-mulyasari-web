import Cookies from 'js-cookie';
import FunctionHandler from '../handlers/functionHandler';

const SideCardComponent = () => {
  const parseFromJSON = JSON.parse(Cookies.get('productCart'));
  const {currencyFormat, handleDelete, handleCheckOut} = FunctionHandler();
  const filterNullItem = parseFromJSON.filter((x) => x.name !== '');

  return (
    <>
      {filterNullItem !== undefined && (
        <div className="w-full h-full flex flex-col justify-center items-center gap-3">
          <button
            onClick={handleCheckOut}
            className="w-[30rem] h-12 bg-indigo-600 rounded-md text-white">
            CheckOut
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:p-7 md:px-10 lg:-mt-5 lg:px-10 w-full h-full p-2 gap-3">
            {filterNullItem.map((item, index) => {
              return (
                <div key={index} className="gap-2 flex h-full pb-5">
                  <div className="border w-full flex shadow-md p-4 gap-3">
                    <img className="h-[8rem] w-[8rem]" src={`${item.image_url}`} alt="" />
                    <div className="flex flex-col w-full gap-1">
                      <p>{item.name}</p>
                      <p>Harga : {currencyFormat(item.price)}</p>
                      <p>Qty : {item.qty}</p>
                      <p>Keterangan : {item.descriptionRequest}</p>
                      <div className="pt-3 h-full flex justify-center items-end">
                        <button
                          onClick={handleDelete}
                          value={item.dateTime}
                          className="h-12 w-full bg-rose-600 rounded-md text-white">
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SideCardComponent;
