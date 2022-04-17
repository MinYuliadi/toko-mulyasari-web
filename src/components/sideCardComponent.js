import FunctionHandler from '../handlers/functionHandler';

const SideCardComponent = (props) => {
  const {currencyFormat, handleDelete} = FunctionHandler();

  return (
    <>
      <div className="gap-2 flex h-full pb-5">
        <div className="border w-full flex shadow-md p-4 gap-3">
          <img className="h-[8rem] w-[8rem]" src={`${props.image_url}`} alt="" />
          <div className="flex flex-col w-full gap-1">
            <p>{props.name}</p>
            <p>Harga: {currencyFormat(props.price)}</p>
            <p>Qty: {props.qty}</p>
            <p>Keterangan: {props.descriptionRequest}</p>
            <div className="pt-3 h-full flex justify-center items-end">
              <button
                onClick={handleDelete}
                value={props.dateTime}
                className="h-12 w-full bg-rose-600 rounded-md font-medium text-base text-white">
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideCardComponent;
