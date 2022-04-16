const InputTextAreaComponent = (props) => {
  return (
    <div className="flex flex-col text-sm">
      <label className={`${props.classLabel}`}>{props.labelName}</label>
      <textarea
        className={`${props.classTextArea}`}
        value={props.valueText}
        onChange={props.param}></textarea>
    </div>
  );
};

export default InputTextAreaComponent;
