import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className = "navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className = "desktopMenu">
                <Link className="desktopMenuListItem" to="/">Home</Link>
                <Link className="desktopMenuListItem" to = "/about">About</Link>
                <Link className="desktopMenuListItem" to="/portfolio">Portfolio</Link>
                <Link className="desktopMenuListItem"to="/client">Client</Link>
                <Link className="desktopMenuListItem" to="/gallery">Gallery</Link>
                <Link className="desktopMenuListItem" to="/blog">Blog</Link>
            </div>
        </nav>    
    )
}

export default Navbar

