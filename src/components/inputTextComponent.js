const InputTextComponent = (props) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className={props.classLabel}>{props.labelName}</label>
        <input
          type={`${props.type}`}
          className={props.classInput}
          value={props.valInput}
          onChange={props.param}
          required
        />
      </div>
    </>
  );
};

export default InputTextComponent;
