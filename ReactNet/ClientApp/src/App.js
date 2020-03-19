import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/layout/Layout';
import { Home } from './components/home/Home';
import { Regulations } from './components/home/Regulations';
import { ProductDetails } from './components/product/ProductDetails';
import { SearchedProducts } from './components/product/SearchedProducts';
import './custom.css'
import { withRouter } from 'react-router-dom';
import { NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './components/layout/NavMenu.css';
import { CartSummary } from './components/cart/CartSummary';
import { SearchBar } from './components/layout/SearchBar';

class App extends Component {
    static displayName = App.name;

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
                <Layout>
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
                                            <div className="nav-link" onClick={this.handleRegulations} style={{ cursor: "pointer" }}>Regulamin</div>
                                        </NavItem>
                                        <NavItem>
                                            <SearchBar {...this.props} />
                                        </NavItem>
                                    </ul>
                                    <CartSummary />
                                </div>
                            </div>
                        </nav>
                    </header>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/regulations' component={Regulations} />
                        <Route exact path='/productDetails/:productId' component={ProductDetails} />
                        <Route exact path='/searchProducts' component={SearchedProducts} />
                    </Switch>
                </Layout>
        );
    }

    handleRegulations = () => {
        this.props.history.push('/regulations');
    }
}

export default withRouter(App);