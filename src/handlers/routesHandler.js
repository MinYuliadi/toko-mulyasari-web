import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {DataProvider} from './stateManagement';
import Cookies from 'js-cookie';
import LandingPage from '../pages/landingPage';
import LayoutComponent from '../components/layoutComponent';
import ProductPage from '../pages/product';
import DetailProduct from '../pages/detailProduct';
import FormPembelian from '../pages/formPembelian';
import KeranjangPage from '../pages/keranjang';
import {Redirect} from 'react-router-dom';

const RoutesHandler = () => {
  const KeranjangHandler = (props) => {
    if (Cookies.get('productCart') === undefined) {
      alert(
        'harap isi Formulir Pembelian sebelum masuk ke keranjang atau sebelum melakukan pemesanan'
      );
      return <Redirect to={`/formulir-pembelian`} />;
    } else if (JSON.parse(Cookies.get('productCart')).length === 1) {
      alert('anda belum memasukan apapun ke keranjang');
      return <Redirect to={`/product`} />;
    } else if (JSON.parse(Cookies.get('productCart')).length > 1) {
      return <>{props.children}</>;
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
          <KeranjangHandler>
            <Route exact path={`/keranjang`}>
              <LayoutComponent>
                <KeranjangPage />
              </LayoutComponent>
            </Route>
          </KeranjangHandler>
        </Switch>
      </DataProvider>
    </BrowserRouter>
  );
};

export default RoutesHandler;
