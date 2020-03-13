import React, { Component } from 'react';

export class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product
        };
    }

    render() {
        return (
            <div className="card" style={{ marginBottom: 15 + "px" }} key={this.state.product.id}>
                <a href="#">
                    <h5 className="card-header">{this.state.product.name}</h5>
                </a>
                <div className="card-body">
                    <a href="#">
                        <img src={this.state.product.imagePath} className="img-thumbnail align-content-center" style={{ float: "left", height: 170 + "px", marginRight: 10 + "px" }} />
                    </a>
                    <p className="card-text text-justify">{this.state.product.description}</p>
                </div>
                <div className="card-footer">
                    <b style={{ fontSize: 22 + "px" }}>{this.state.product.price} PLN</b>
                    <a className="btn btn-primary" style={{ float: "right" }} href="#">Do koszyka</a>
                </div>
            </div>
            );
    }
}