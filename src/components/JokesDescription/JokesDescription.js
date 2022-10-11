import React, { useEffect, useState } from 'react';
import './JokesDescription.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import likeIcon from '../../images/hand@2x.png';
import dislikeIcon from '../../images/hand-copy@2x.png';

const JokesDescription = () => {
    const { id } = useParams();
    const location = useLocation();

    // Latest Top 10 Posts
    const [latestCategories, setLatestCategories] = useState(null);
    const [topLoadingCategory, setTopLoadingCategory] = useState(10);
    const [counter, setCounter] = useState(151);
    const [countDislike, setCountDislike] = useState(51);

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/categories")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setLatestCategories(data)
            })
    }, [])


    return (
        <section className="jokes-description">
            <div className="row">
                <div className="jokes-description-container">
                    <div className="jokes-description-item-left">
                        <div className="jokes-info">
                            <div className="jokes-category-tag">
                                <span className="jokes-tag">
                                    • {location.state.categories} JOKES
                                </span>
                            </div>
                            <div className="jokes-category-level">
                                <span className="jokes-trending">
                                    • TRENDING
                                </span>
                            </div>
                        </div>
                        <div className="jokes-reaction-section">
                            <h3 className="jokes-category-title">The {location.state.category} Joke <span>___________________________________________________________ NO #1</span></h3>
                            <p>{location.state.value}{location.state.value}</p>
                            <div className="like-counts">
                                <div className="like-button like-dislike-button">
                                    <img className="like-button-icon" src={likeIcon} alt="" />
                                    <p className="add-counter">{counter}</p>
                                </div>

                                <div className="dislike-button like-dislike-button">
                                    <img className="dislike-button-icon" src={dislikeIcon} alt="" />
                                    <p className="add-counter">{countDislike}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jokes-description-item-right">
                        <p className="latest-jokes-title">The top 10 jokes this week</p>
                        {
                            latestCategories && latestCategories.slice(0, topLoadingCategory).reverse().map((latestCategory, index) => {
                                return (
                                    <div key={index}>
                                        <p className="jokes-list">{latestCategory} joke</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section >
    );
};

export default JokesDescription;