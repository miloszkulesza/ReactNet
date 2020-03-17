import React, { Component } from 'react';
import { NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { CartSummary } from '../cart/CartSummary';
import { SearchBar } from './SearchBar';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
                    <div className="container">
                        <NavbarBrand className="text-white" tag={Link} to="/">LS-Shop</NavbarBrand>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <NavItem>
                                    <NavLink tag={Link} to="/counter">Kontakt</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/regulations">Regulamin</NavLink>
                                </NavItem>
                                <NavItem>
                                    <SearchBar />
                                </NavItem>
                            </ul>
                            <CartSummary />
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
