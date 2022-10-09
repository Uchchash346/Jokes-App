import React from 'react';
import './Footer.css';
import footerImage from '../../images/bitmap_2@2x.png';
import arrowIcon from '../../images/path-copy-4@2x.png';

const Footer = () => {
    return (
        <>
            <div className="container footer-section">
                <img src={footerImage} alt="" className={{ 'bottom': '0px' }} />
                <div className="footer-text-area">
                    <h3>Got jokes? Get Paid <br /> For submitting</h3>
                    <p>submit joke <span><img className="arrow-icon" src={arrowIcon} alt="" /></span></p>
                </div>
            </div>
        </>
    );
};

export default Footer;