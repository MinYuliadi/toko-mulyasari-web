const FaqLayoutComponent = (props) => {
  return (
    <div className="flex flex-col -mt-20 justify-center text-base font-medium text-gray-700 items-center p-3 sm:p-12 md:px-[8rem] lg:px-[10rem]">
      {props.children}
    </div>
  );
};

export default FaqLayoutComponent;
