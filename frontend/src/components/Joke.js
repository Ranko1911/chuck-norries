import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomJoke = () => {
    const [joke, setJoke] = useState("");

    const fetchJoke = async () => {
        try {
            const response = await axios.get("https://api.chucknorris.io/jokes/random");
            setJoke(response.data.value);
        } catch (error) {
            console.error("Error fetching joke", error);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <p>{joke}</p>
            <button onClick={fetchJoke}>Get another joke</button>
        </div>
    );
};

export default RandomJoke;
