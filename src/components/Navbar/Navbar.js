import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-right">
                    <a href="/">SO FUNKTIONIERT'S</a>
                    <a href="#news">SONDERANGEBOTE</a>
                    <div className="dropdown">
                        <button className="dropbtn">
                            MEIN BEREICH
                            <img className="dropdown-icon" src="../../images/path_2@3x" alt="" />
                        </button>
                        <div className="dropdown-content">
                            <a href="/">My published jokes</a>
                            <a href="/">My saved jokes</a>
                            <a href="/">Account Information</a>
                            <a href="/">Publish new joke</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;