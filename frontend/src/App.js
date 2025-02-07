import React from "react";
import Joke from "./components/Joke";
import JokeByCategory from "./components/JokeByCategory";
import JokeByName from "./components/JokeByName";
import JokeByQuery from "./components/JokeByQuery";
import JokeCatagories from "./components/JokeCatagories";
import JokeCategoriesAndName from "./components/JokeByNameAndCategory";

function App() { // esto es basicamente html pero no es html, es jsx
    return (
        <div>
            <Joke />  
            <JokeByCategory />
            <JokeByName />
            <JokeByQuery />
            {/* <JokeCatagories /> */}
            <JokeCategoriesAndName />
        </div>
    );
}

export default App;
