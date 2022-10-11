import React, { useState } from 'react';
import './Banner.css';
import BannerImage from '../../images/bitmap.png';
import { AiOutlineSearch } from "react-icons/ai";

const Banner = () => {
    const [text, setText] = useState("");
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
                    <input
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        className="search-input"
                        placeholder="How can we make you laugh today?"
                    />
                    <AiOutlineSearch className="search-ic" size={30} />
                </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;