import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            logoUrl: 'logo192.png'
         }
    }
    render() { 
        const classes = this.props.productsCount === 0 ? "badge badge-danger" : "badge badge-success";
        return ( 
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/home">
                    <img src={this.state.logoUrl} width="30" height="30" alt="" />
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin">Admin</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink className="nav-link" to="/cart">
                    <i className="fas fa-shopping-cart"></i><span className={classes}>{this.props.productsCount}</span>
                </NavLink>
            </nav>
        );
    }
}
 
export default NavBar;