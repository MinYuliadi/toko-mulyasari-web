import Cookies from 'js-cookie';
import FunctionHandler from '../handlers/functionHandler';
import {useState} from 'react';

const SideCardComponent = () => {
  const parseFromJSON = JSON.parse(Cookies.get('productCart'));
  const {currencyFormat, handleDelete, handleCheckOut, totalPerItem} = FunctionHandler();
  const filterNullItem = parseFromJSON.filter((x) => x.name !== '');

  const totalPembayaran = filterNullItem.reduce(
    (a, b) => a + parseInt(b.qty || 0) * parseInt(b.price || 0),
    0
  );

  return (
    <>
      {filterNullItem !== undefined && (
        <div className="w-full h-full flex flex-col justify-center items-center gap-3">
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
          <div className="lg:w-[32rem] sm:p-7 text-base -mt-10 font-medium w-full md:w-[30rem] p-3 md:pb-10 flex flex-col gap-4">
            <div className="shadow-md p-4 flex flex-col items-center justify-center">
              {filterNullItem.map((item, index) => {
                return (
                  <>
                    <div key={index} className="w-full flex justify-between">
                      <span>
                        {item.name} x{item.qty}
                      </span>
                      <span>{currencyFormat(parseInt(item.qty) * parseInt(item.price))}</span>
                    </div>
                  </>
                );
              })}
              <div className="w-full flex justify-between pt-3 text-indigo-600">
                <span className="">Total Pembayaran: </span>
                <span>{currencyFormat(totalPembayaran)}</span>
              </div>
              <div className="w-full pt-5 flex font-Ubuntu text-justify">
                <span className="text-sm">Note&nbsp;:&nbsp;</span>
                <span className="text-sm">
                  perlu di ketahui total pembayaran di atas belum termasuk ongkos pengirimannya yaaa
                </span>
              </div>
            </div>
            <button onClick={handleCheckOut} className="h-12 bg-indigo-600 rounded-md text-white">
              CheckOut
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SideCardComponent;
