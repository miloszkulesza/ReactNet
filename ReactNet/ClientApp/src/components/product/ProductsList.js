import React, { Component } from 'react';
import { ProductCard } from './ProductCard';
import { LoadingGif } from '../layout/LoadingGif';
import { CategoryContext } from './CategoryProvider';

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
            response = await fetch(`api/product/getProducts?categoryId=${selectedCategoryId}`);
        }
        else {
            response = await fetch('api/product/getProducts');
        }
        let data = await response.json();
        data.forEach(product => {
            product.imagePath = `/images/products/${product.imageName}`;
        });
        this.setState({ products: data, loading: false });        
    }

    render() {
        const { loading, products } = this.state;

        return (
            <div>
                <CategoryContext.Consumer>
                    {(context) => (<h1>{context.state.selectedCategoryName}</h1>)}
                </CategoryContext.Consumer>
                <hr />
                {loading ? <LoadingGif /> : products.map(product => <ProductCard product={product} key={product.id} history={this.props.history}/>)}
            </div>
        );
    }

    componentWillReceiveProps(categoryId) {
        this.setState({ loading: true });
        setTimeout(async () => { await this.getProductsList(categoryId.dataFromParent); }, 500);
    }
}