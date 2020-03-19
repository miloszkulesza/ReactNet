import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
            search: props.search
        };
    }

    render() {
        return (
            <div className="card nav" style={{ marginBottom: 15 + "px" }} key={this.state.product.id}>
                <h5 className="card-header" onClick={this.handleProductDetails}>
                    <Link>
                        {this.state.product.name}
                    </Link>
                </h5>
                <div className="card-body">
                        <img src={this.state.product.imagePath} className="img-thumbnail align-content-center" 
                            style={{ float: "left", height: 170 + "px", marginRight: 10 + "px", cursor: "pointer" }}
                            onClick={this.handleProductDetails} alt="productImage" />
                    <p className="card-text text-justify">{this.state.product.description}</p>
                </div>
                <div className="card-footer">
                    <b style={{ fontSize: 22 + "px" }}>{this.state.product.price} PLN</b>
                    <a className="btn btn-primary" style={{ float: "right" }}>Do koszyka</a>
                </div>
            </div>
        );
    }

    handleProductDetails = () => {
        this.props.history.push({
            pathname: `/productDetails/${this.state.product.id}`,
            state: {
                search: this.props.search
            }
        });
    }
}