import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {DataProvider} from './stateManagement';
import LandingPage from '../pages/landingPage';
import LayoutComponent from '../components/layoutComponent';
import ProductPage from '../pages/product';
import DetailProduct from '../pages/detailProduct';
import FormPembelian from '../pages/formPembelian';

const RoutesHandler = () => {
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
        </Switch>
      </DataProvider>
    </BrowserRouter>
  );
};

export default RoutesHandler;
