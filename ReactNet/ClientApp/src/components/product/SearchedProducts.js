import React, { Component } from 'react';
import { ProductCard } from './ProductCard';
import { LoadingGif } from '../layout/LoadingGif';

export class SearchedProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            keywords: "",
            responseOk: false,
            loading: false
        }
    }

    handleSearch = () => {
        this.setState({ loading: true });
        let searchText = this.props.location.state.keywords;
        fetch('api/search', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: searchText
        }).then(async response => {
            if (response.ok == true) {
                let products = await response.json();
                products.forEach(product => product.imagePath = `/images/products/${product.imageName}`);
                this.setState({ products: products, responseOk: response.ok, loading: false });
                this.forceUpdate();
            }
        });
    }

    componentDidMount() {
        this.handleSearch();  
    }

    componentDidUpdate(prevProps) {
        let prevSearch = prevProps.location.state.keywords;
        let newSearch = this.props.location.state.keywords;
        if (prevSearch !== newSearch) {
            this.handleSearch();
        }
    }

    render() {
        const { products, responseOk, keywords, loading } = this.state;
        if (loading) {
            return (<LoadingGif />);
        }
        if(responseOk) {
            return (
                <div>
                    {products.map(product => <ProductCard product={product} />)}
                </div>
            );
        }
        else {
            return (
                <h1>Nie znaleziono wyszukiwanej frazy</h1>
            );
        }
    }
}