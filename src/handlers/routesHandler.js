import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {DataProvider} from './stateManagement';
import Cookies from 'js-cookie';
import LandingPage from '../pages/landingPage';
import LayoutComponent from '../components/layoutComponent';
import ProductPage from '../pages/productPage';
import DetailProduct from '../pages/detailProductPage';
import FormPembelian from '../pages/formPembelian';
import KeranjangPage from '../pages/keranjangPage';
import {Redirect} from 'react-router-dom';
import PageNotFound from '../pages/notFoundPage';
import NavigationBar from '../components/navigation';
import FaqPage from '../pages/faqPage';
import TentangKamiPage from '../pages/tentangKamiPage';

const RoutesHandler = () => {
  const KeranjangRoute = ({...props}) => {
    if (Cookies.get('productCart') === undefined) {
      alert(
        'harap isi Formulir Pembelian sebelum masuk ke keranjang atau sebelum melakukan pemesanan'
      );
      return <Redirect to={`/formulir-pembelian`} />;
    } else if (JSON.parse(Cookies.get('productCart')).length === 1) {
      alert('anda belum memasukan apapun ke keranjang');
      return <Redirect to={`/product`} />;
    } else if (JSON.parse(Cookies.get('productCart')).length > 1) {
      return <Route {...props} />;
    }
  };

  return (
    <BrowserRouter>
      <DataProvider>
        <Switch>
          <Route exact path={`/`}>
            <LandingPage />
          </Route>
          <Route exact path={`/product`}>
            <LayoutComponent>
              <ProductPage />
            </LayoutComponent>
          </Route>
          <Route exact path={`/detail-product/:slug`}>
            <LayoutComponent>
              <DetailProduct />
            </LayoutComponent>
          </Route>
          <Route exact path={`/formulir-pembelian`}>
            <LayoutComponent>
              <FormPembelian />
            </LayoutComponent>
          </Route>
          <Route exact path={`/faq-page`}>
            <LayoutComponent>
              <FaqPage />
            </LayoutComponent>
          </Route>
          <Route exact path={`/tentang-kami`}>
            <LayoutComponent>
              <TentangKamiPage />
            </LayoutComponent>
          </Route>
          <KeranjangRoute exact path={`/keranjang`}>
            <LayoutComponent>
              <KeranjangPage />
            </LayoutComponent>
          </KeranjangRoute>
          <Route path={`*`}>
            <NavigationBar />
            <PageNotFound />
          </Route>
        </Switch>
      </DataProvider>
    </BrowserRouter>
  );
};

export default RoutesHandler;
