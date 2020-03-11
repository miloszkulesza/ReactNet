import React, { Component } from 'react';

export class ProductsList extends Component {
    static displayName = ProductsList.name;

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        this.getProductsList();
    }

    static renderProductsTable(products) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Opis</th>
                        <th>Ilość</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.id}>
                            <td>{product.name.toString()}</td>
                            <td>{product.description.toString()}</td>
                            <td>{product.quantity.toString()}</td>
                            <td>{product.price.toString()}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    async getProductsList() {
        const response = await fetch('product');
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Ładowanie...</em></p>
            : ProductsList.renderProductsTable(this.state.products);

        return (
            <div>
                <h1 id="tabelLabel" >Produkty</h1>
                {contents}
            </div>
        );
    }
}