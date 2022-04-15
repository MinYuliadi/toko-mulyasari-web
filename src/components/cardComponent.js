const CardComponent = (props) => {
  return (
    <>
      <div className={`${props.classMainDiv}`}>
        <div className={`${props.classSecondDiv}`}>
          <span>{props.text}</span>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
