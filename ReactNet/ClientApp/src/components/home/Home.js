import React, { Component } from 'react';
import { ProductsView } from '../product/ProductsView';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <ProductsView />
    );
  }
}
