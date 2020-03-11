import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';

export class CartSummary extends Component {
    render() {
        return (
            <div className="nav-item">
                <NavLink tag={Link} to="/">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="badge badge-primary">0</span>
                </NavLink>
            </div>
        );
    }
}