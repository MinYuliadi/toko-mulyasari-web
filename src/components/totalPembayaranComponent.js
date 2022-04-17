import FunctionHandler from '../handlers/functionHandler';

const TotalPembayaranComponent = (props) => {
  const {currencyFormat} = FunctionHandler();
  return (
    <>
      <div className="w-full flex justify-between">
        <span>
          {props.name} x{props.qty}
        </span>
        <span>{currencyFormat(parseInt(props.qty2) * parseInt(props.price))}</span>
      </div>
    </>
  );
};

export default TotalPembayaranComponent;
