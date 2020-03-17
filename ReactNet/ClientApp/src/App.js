import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/layout/Layout';
import { Home } from './components/home/Home';
import { Regulations } from './components/home/Regulations';
import { ProductDetails } from './components/product/ProductDetails';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/regulations' component={Regulations} />
        <Route path='/productDetails/:productId' component={ProductDetails} />
      </Layout>
    );
  }
}
