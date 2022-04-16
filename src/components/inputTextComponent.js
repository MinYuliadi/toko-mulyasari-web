import FunctionHandler from '../handlers/functionHandler';

const InputTextComponent = (props) => {
  const {handleChange} = FunctionHandler();
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className={props.classLabel}>{props.labelName}</label>
        <input
          type={`${props.type}`}
          className={props.classInput}
          value={props.valInput}
          onChange={(e) => handleChange(`${props.param}`, e)}
          required
        />
      </div>
    </>
  );
};

export default InputTextComponent;
