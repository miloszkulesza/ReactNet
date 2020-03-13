import React, { Component } from 'react';
import { ProductCard } from './ProductCard';

export class ProductsList extends Component {
    static displayName = ProductsList.name;

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        this.getProductsList();
    }

    async getProductsList() {
        const response = await fetch('product');
        const data = await response.json();
        data.forEach(product => {
            product.imagePath = `/images/products/${product.imageName}`;
        });
        this.setState({ products: data, loading: false });
        
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Ładowanie...</em></p>
            : this.state.products.map(product => <ProductCard product={product} />);

        return (
            <div>
                <h1 id="tabelLabel" >Produkty</h1>
                {contents}
            </div>
        );
    }
}