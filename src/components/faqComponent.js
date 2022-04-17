const FaqComponent = (props) => {
  return (
    <div className="w-full h-full border-l-2 border-rose-600 pl-2">
      <div className="w-full h-full border-l-2 border-rose-600 p-5 gap-3 text-justify flex justify-center items-start flex-col">
        <span className="border-b-2 text-indigo-600 border-gray-700 p-3">{props.Question}</span>
        <span className="p-3">{props.Answer}</span>
      </div>
    </div>
  );
};

export default FaqComponent;
