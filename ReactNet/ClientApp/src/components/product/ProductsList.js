import React, { Component } from 'react';
import { ProductCard } from './ProductCard';
import { CategoriesList } from './CategoriesList';

export class ProductsList extends Component {
    static displayName = ProductsList.name;

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true
        };
    }

    async componentDidMount() {
        await this.getProductsList();
    }

    async getProductsList(selectedCategoryId) {
        let response;
        if (selectedCategoryId != null) {
            response = await fetch(`product?categoryId=${selectedCategoryId}`);
        }
        else {
            response = await fetch('product');
        }
        let data = await response.json();
        data.forEach(product => {
            product.imagePath = `/images/products/${product.imageName}`;
        });
        this.setState({ products: data,  loading: false });        
    }

    render() {
        const { loading, products } = this.state;
        
        return (
            <div className="row">
                <div className="col-2">
                    <CategoriesList parentCallback={this.selectedCategoryCallback} />
                </div>
                <div className="col-10">
                    {loading ?
                        <img src="/images/icons/loading.gif" style={{ position: "fixed", top: (window.screen.height/2)-300, left: (window.screen.width / 2)-250, zIndex: 3 }} />
                        : products.map(product => <ProductCard product={product} />)}
                </div>
            </div>
        );
    }

    selectedCategoryCallback = (selectedCategoryId) => {
        this.setState({ loading: true });
        this.getProductsList(selectedCategoryId);
    }
}