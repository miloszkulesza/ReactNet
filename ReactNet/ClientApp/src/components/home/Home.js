import React, { Component } from 'react';
import { ProductsList } from '../product/ProductsList';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <ProductsList />
    );
  }
}
