import FunctionHandler from '../handlers/functionHandler';

const ListProductComponent = (props) => {
  const {handleDetail, currencyFormat} = FunctionHandler();

  return (
    <li className="gap-2 flex flex-col pb-5">
      <div className="border shadow-md p-4 h-fit min-h-[18rem]">
        <div className="flex justify-center w-full">
          <img className="h-[10rem]" src={`${props.image_url}`} alt="" />
        </div>
        <p>{props.name}</p>
        <p>Harga : {currencyFormat(props.price)}</p>
      </div>
      <button
        onClick={handleDetail}
        value={props.id}
        className="bg-indigo-600 rounded-md w-full h-8 items-end text-white">
        Lihat Detail
      </button>
    </li>
  );
};

export default ListProductComponent;
