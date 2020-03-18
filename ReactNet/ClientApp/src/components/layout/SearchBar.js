import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKeywords: "",
            redirect: false,
        }
    }

    render() {
        if (this.state.redirect) {
            this.setState({redirect: false});
            return (
                <div>
                    <Redirect to={{
                        pathname: "/searchProducts",
                        state: {
                            keywords: this.state.searchKeywords
                        }
                    }} />
                </div>
            );
        }
        return(
            <form className="form-inline" onSubmit={this.handleSearchSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Napisz czego szukasz..." aria-label="Search" onChange={this.handleSearchInputChange.bind(this)} />
                <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Szukaj" />
            </form>
        );
    }

    handleSearchInputChange(input) {
        if(this.state.redirect)
            this.setState({redirect: false});
        this.setState({ searchKeywords: input.currentTarget.value });
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchKeywords) {
            let text = this.state.searchKeywords;
            this.setState({ searchKeywords: text, redirect: true})
        } else {
            alert("Wpisz fraze do wyszukania");
        }
    };
}