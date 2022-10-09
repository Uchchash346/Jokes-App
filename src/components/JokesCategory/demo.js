import React, { useEffect, useState } from "react";
import "./jokes.css";
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
const Jokes = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [jokes, setJokes] = useState([]);

    const [categoryLength, setCategoryLength] = useState(5);

    const fetchCategories = async () => {
        const response = await fetch(
            "https://api.chucknorris.io/jokes/categories"
        );
        const data = await response.json();
        console.log(data);
        setCategory(data[0]);
        return setCategories(data);
    };

    const fetchJokes = async () => {
        const response = await fetch(
            `https://api.chucknorris.io/jokes/search?query=${category}`
        );
        const data = await response.json();
        console.log(data);
        return setJokes(data.result);
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (category.length > 0) fetchJokes();
    }, [category]);
    return (
        <div className="root">
            <div className="categories">
                {categories.slice(0, categoryLength).map((item, index) => {
                    return (
                        <div
                            onClick={() => {
                                setCategory(item);
                                console.log(item);
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
                    onClick={() => {
                        setCategoryLength(categories.length);
                    }}
                >
                    Show More
                </button>
            </div>
            {jokes?.length > 0 && (
                <div className="joke-cards">
                    {jokes.map((item, index) => {
                        return (
                            <div key={index} className="card-item">
                                <div className="card-header">
                                    {category.toUpperCase()} JOKE
                                </div>
                                <div className="card-text">{item.value}</div>
                                <div className="stats">SEE STATS</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Jokes;