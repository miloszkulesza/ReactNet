import React, { Component } from 'react';

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKeywords: ""
        }
    }

    render() {
        return(
            <form className="form-inline" onSubmit={this.handleSearchSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Napisz czego szukasz..." aria-label="Search" onChange={this.handleSearchInputChange.bind(this)} />
                <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Szukaj" />
            </form>
        );
    }

    handleSearchInputChange(input) {
        this.setState({ searchKeywords: input.currentTarget.value });
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchKeywords) {
            let text = this.state.searchKeywords;
            this.props.history.push({
                pathname: 'searchProducts',
                state: {
                    keywords: text
                }
            })
        } else {
            alert("Wpisz fraze do wyszukania");
        }
    };
}