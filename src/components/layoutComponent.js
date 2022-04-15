import NavigationBar from './navigation';

const LayoutComponent = (props) => {
  return (
    <div className="w-full min-h-screen h-full">
      <NavigationBar />
      {props.children}
    </div>
  );
};

export default LayoutComponent;
