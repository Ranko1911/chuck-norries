import React from "react";
import Joke from "./components/Joke";
import JokeByCategory from "./components/JokeByCategory";
import JokeByName from "./components/JokeByName";
import JokeByQuery from "./components/JokeByQuery";
import JokeCategoriesAndName from "./components/JokeByNameAndCategory";
import "./App.css"; // Importamos los estilos

function App() {
    return (
        <div className="app-container">
            <div className="content">
                <h1>Chuck Norris Jokes</h1>
                <Joke />
                <JokeByCategory />
                <JokeByName />
                <JokeByQuery />
                <JokeCategoriesAndName />
            </div>
        </div>
    );
}

export default App;
