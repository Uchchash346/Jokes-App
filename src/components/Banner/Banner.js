import React from 'react';
import './Banner.css';
import BannerImage from '../../images/bitmap.png';
import searchIcon from '../../images/search-copy.png';

const Banner = () => {
    return (
        <>
            <div className="container">
                <img src={BannerImage} alt="" style={{ "width": "100%;" }} />
                <div className="centered heading-area">
                    <h1 className="header-title">The Joke Bible</h1>
                    <p className="header-subtitle">Daily Laughs for Yoy and Yours</p>
                    {/* Input Search Area */}
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="How can we make you laugh today?" />
                            <button type="submit" className="searchButton">
                                <img src={searchIcon} alt="" />
                                {/* <i className="fa fa-search"></i> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;