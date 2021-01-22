import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) =>{
    console.log("props: ",props)
    return(
        <nav className="nav-warapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">

                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                
                </ul>
            </div>
        </nav>   
    )
}

export default withRouter(Navbar);