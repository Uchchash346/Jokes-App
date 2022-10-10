import React, { useEffect, useState } from 'react';
import './JokesCategory.css';
import jokesData from '../../data/dummy_data';
import arrowSign from '../../images/path-copy-4.png';
import { Link, useNavigate } from 'react-router-dom';
const colors = [
    "#ff5b5b",
    "#57e690",
    "#ff915b",
    "#57dbe6",
    "#d0ba93",
    "#ffbe5b",
    "#8fe360",
    "#ffdf5b",
];

const JokesCategory = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [jokes, setJokes] = useState([]);
    const [categoryLength, setCategoryLength] = useState(7);
    const [noOfJokesCard, setNoOfJokesCard] = useState(6);
    const navigate = useNavigate();

    // Fetch Jokes Category
    const fetchCategories = async () => {
        const response = await fetch(
            "https://api.chucknorris.io/jokes/categories"
        );
        const data = await response.json();
        setCategory(data[0]);

        return setCategories(data);
    };

    // Fetch Jokes Card
    const fetchJokes = async () => {
        const response = await fetch(
            `https://api.chucknorris.io/jokes/search?query=${category}`
        );
        const data = await response.json();
        // console.log(data);
        return setJokes(data.result);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (category.length > 0) fetchJokes();
    }, [category]);

    const showStats = id => {
        const url = `cate`
    }

    return (
        <>
            <div className="root">
                <div className="categories">
                    {categories.slice(0, categoryLength).map((item, index) => {
                        return (
                            <div
                                onClick={() => {
                                    setCategory(item);
                                    // console.log(item);
                                }}
                                key={index}
                                style={{
                                    backgroundColor: colors[index % colors.length],
                                }}
                                className="category-item"
                            >
                                {item.toUpperCase()}
                            </div>
                        );
                    })}
                    <button
                        className="category-item"
                        onClick={() => {
                            setCategoryLength(categories.length);
                        }}
                    >View More</button>
                </div>
                {jokes?.length > 0 && (
                    <div className="joke-cards">
                        {jokes.slice(0, noOfJokesCard).map((item, index) => {
                            const { id, categories, value } = item;
                            return (
                                <div key={index} className="card-item">
                                    <div className="card-header">
                                        {category.toUpperCase()} JOKE
                                    </div>
                                    <div className="card-text">{item.value}</div>
                                    <div className="stats">
                                        <Link to={id}
                                            state={{ id, categories, value }}
                                            className="link-stats"
                                        >
                                            SEE STATS
                                        </Link><img src={arrowSign} className="arrow-right-icon" alt="" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                <div className="view-button">
                    <button
                        className="view-more-button"
                        onClick={() => {
                            setNoOfJokesCard(jokes.length);
                        }}
                    >View More
                        <span></span>
                    </button>
                </div>
            </div>

        </>
    );
};

export default JokesCategory;