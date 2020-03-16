import React, { Component } from 'react';
import { CategoriesList } from './CategoriesList';
import { ProductsList } from './ProductsList';
import { CategoryProvider } from './CategoryProvider';

export class ProductsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: "all"
        };
    }
    render() {
        return (
            <CategoryProvider>
                <div className="row">
                        <div className="col-sm-12 col-lg-2">
                            <CategoriesList parentCallback={this.selectedCategoryCallback} />
                        </div>
                        <div className="col-sm-12 col-lg-10">
                            <ProductsList dataFromParent={this.state.categoryId} />
                        </div>
                </div>
            </CategoryProvider>
        );
    }   
    
    selectedCategoryCallback = (selectedCategory) => {
        this.setState({categoryId: selectedCategory});
    }
}