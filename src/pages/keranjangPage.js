import SideCardComponent from '../components/sideCardComponent';
import TotalPembayaranComponent from '../components/totalPembayaranComponent';
import FunctionHandler from '../handlers/functionHandler';
import Cookies from 'js-cookie';

const KeranjangPage = () => {
  const {handleCheckOut, currencyFormat} = FunctionHandler();

  const parseFromJSON = JSON.parse(Cookies.get('productCart'));
  const filterNullItem = parseFromJSON.filter((x) => x.name !== '');

  const totalPembayaran = filterNullItem.reduce(
    (a, b) => a + parseInt(b.qty || 0) * parseInt(b.price || 0),
    0
  );

  const listItem = filterNullItem.map((item) => (
    <SideCardComponent
      image_url={item.image_url}
      name={item.name}
      price={item.price}
      qty={item.qty}
      descriptionRequest={item.descriptionRequest}
      dateTime={item.dateTime}
      key={item.dateTime}
    />
  ));

  const detailPembayaran = filterNullItem.map((item) => (
    <TotalPembayaranComponent
      name={item.name}
      qty={item.qty}
      qty2={item.qty}
      price={item.price}
      key={item.dateTime}
    />
  ));

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center gap-3">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:p-7 md:px-10 lg:-mt-5 lg:px-10 w-full h-full p-2 gap-3">
          {listItem}
        </div>
        <div className="lg:w-[32rem] sm:p-7 text-base -mt-10 font-medium w-full md:w-[30rem] p-3 md:pb-10 flex flex-col gap-4">
          <div className="shadow-md p-4 flex flex-col items-center justify-center">
            {detailPembayaran}
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
    </>
  );
};

export default KeranjangPage;
