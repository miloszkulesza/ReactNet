import React from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/layout/Layout';
import { Home } from './components/home/Home';
import { Regulations } from './components/home/Regulations';
import { ProductDetails } from './components/product/ProductDetails';
import { SearchedProducts } from './components/product/SearchedProducts';
import './custom.css'
import { BrowserRouter } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/regulations' component={Regulations} />
                    <Route exact path='/productDetails/:productId' component={ProductDetails} />
                    <Route exact path='/searchProducts' component={SearchedProducts} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}