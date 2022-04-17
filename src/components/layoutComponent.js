import NavigationBar from './navigation';
import FooterLayout from './footerComponent';

const LayoutComponent = (props) => {
  return (
    <div className="w-full min-h-screen h-full">
      <NavigationBar />
      {props.children}
      <FooterLayout />
    </div>
  );
};

export default LayoutComponent;
