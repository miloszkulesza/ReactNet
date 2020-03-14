import React, { Component } from 'react';

export class CategoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            selectedCategoryId: "all"
        };
    }

    componentDidMount() {
        this.getCategoriesList();
    }

    async getCategoriesList() {
        let response = await fetch('category');
        let data = await response.json();
        this.setState({ categories: data });
    }

    render() {
        let contents = this.state.categories.map(category => <a className="list-group-item list-group-item-action" onClick={this.handleClick.bind(this, category.id)} id={category.id}>{category.name}</a>);
        return (
            <div className="list-group" style={{ position: "fixed", minWidth: "150px" }}>
                <a  onClick={this.handleClick.bind(this, "all")} className="list-group-item list-group-item-action selectedCategory bg-primary text-white" id="all">Wszystkie</a>
                {contents}
            </div>
        );
    }

    handleClick(categoryId) {
        let previousCategory = document.getElementById(this.state.selectedCategoryId);
        let nextCategory = document.getElementById(categoryId);
        if (previousCategory.id != nextCategory.id) {
            previousCategory.classList.remove("bg-primary");
            previousCategory.classList.remove("selectedCategory");
            previousCategory.classList.remove("text-white");
            nextCategory.classList.add("bg-primary");
            nextCategory.classList.add("selectedCategory");
            nextCategory.classList.add("text-white");
            this.setState({ selectedCategoryId: categoryId });
            this.props.parentCallback(categoryId);
        }
    }
}