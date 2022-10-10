import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const JokesDescription = () => {
    const { id } = useParams();
    const location = useLocation();

    return (
        <section className="jokes-description">
            <div className="row">
                {/* <h1>{id}</h1> */}
                <div className="grid-description-container">
                    <div className="grid-description-items">
                        <h2>{id}</h2>
                        <h2>The {location.state.categories} Joke</h2>
                        <h2>{location.state.value}</h2>
                    </div>
                    <div className="grid-description-items"></div>
                </div>
            </div>
        </section>
    );
};

export default JokesDescription;