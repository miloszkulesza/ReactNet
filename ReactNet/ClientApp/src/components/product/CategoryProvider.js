import React, { Component } from 'react';

export const CategoryContext = React.createContext();

export class CategoryProvider extends Component {
    state = { selectedCategoryName: "Wszystkie" };

    render() {
        return (
            <CategoryContext.Provider value={{
                state: this.state,
                setCategoryName: (value) => this.setState({ selectedCategoryName: value })
            }}>
                {this.props.children}
            </CategoryContext.Provider>
        );
    }
}