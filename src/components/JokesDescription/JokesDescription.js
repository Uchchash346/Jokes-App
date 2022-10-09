import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JokesDescription = () => {
    const { id } = useParams();
    const [jokes, setJokes] = useState([]);
    
    const fetchJokes = async () => {
        const response = await fetch(
            `https://api.chucknorris.io/jokes/${id}`
        );
        const data = await response.json();
        console.log(data.categories);
        return setJokes(data.result);
    };

    useEffect(() => {
        if (id) fetchJokes();
    }, []);

    return (
        <section className="jokes-description">
            <div className="row">
                <h1>{id}</h1>
                {/* {
                    jokes.map((item, index) => {
                        return (
                            <div className="grid-jokes-description-container">
                                <div className="grid-jokes-description-items">
                                    <p className="jokes-title-area">

                                    </p>
                                </div>
                                <div className="grid-jokes-description-items">

                                </div>
                            </div>
                        )
                    })
                } */}

            </div>
        </section>
    );
};

export default JokesDescription;