import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(
        <nav className="nav-wrapper red">
        <div className="container">
            <a className="brand-logo">Blog</a>
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        </nav>
    );
}
export default Navbar;
//export default withRouter(Navbar); //higher order components