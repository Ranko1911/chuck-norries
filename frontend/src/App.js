import React, { useState } from "react";
import Joke from "./components/Joke";
import JokeByCategory from "./components/JokeByCategory";
import JokeByName from "./components/JokeByName";
import JokeByQuery from "./components/JokeByQuery";
import JokeCategoriesAndName from "./components/JokeByNameAndCategory";
import "./App.css"; // Importamos los estilos

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`app-container ${darkMode ? "dark-mode" : ""}`}
      style={{ 
        backgroundImage: "url('/chuck-norris.jpg')", 
        backgroundRepeat: "repeat", 
        backgroundSize: "25% 25%",
        backgroundPosition: "center center",
    }}
    >
      {" "}
      <div className="content">
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Modo Claro 🌞" : "Modo Oscuro 🌙"}
        </button>
        <h1>Random Jokes</h1>
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
