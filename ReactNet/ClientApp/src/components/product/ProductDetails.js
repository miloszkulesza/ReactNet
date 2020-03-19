import React, { Component } from 'react';
import { LoadingGif } from '../layout/LoadingGif';
import { Link } from 'react-router-dom';

export class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.match.params.productId,
            product: {},
            loading: true,
            search: this.props.location.state.search
        }
    }

    async componentDidMount() {
        await this.getProduct();
    }

    async getProduct() {
        let response = await fetch(`api/product/getProduct?productId=${this.state.productId}`);
        let data = await response.json();
        data.imagePath = `/images/products/${data.imageName}`;
        this.setState({ product: data, loading: false });
    }

    render() {
        if(this.state.loading) {
            return(
                <LoadingGif />
            );
        }
        else {
            return(
                <div>
                    <h3>{this.state.product.name}</h3>
                    <hr />
                    <img alt="productImage" src={this.state.product.imagePath} className="img-thumbnail mx-auto" style={{ display: "block", marginBottom: "10px" }} /><br />
                    <p class="text-justify">{this.state.product.description}</p><br />
                    <b>Cena: </b> {this.state.product.price} PLN<br />
                    <b>Ilość: </b> {this.state.product.quantity} szt.<br /><br />
                    <div class="btn btn-primary" style={{ marginRight: "10px" }}>Dodaj do koszyka</div>
                    <div class="btn btn-info" onClick={this.handleGoBack}>Powrót</div>
                </div>
            );
        }
    }

    handleGoBack = () => {
        if(this.state.search){
            this.props.history.push({
                pathname: '/searchProducts',
                state: {
                    keywords: this.state.search
                }
            });
        }
        else{
            this.props.history.goBack();
        }
    }
}