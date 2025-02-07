import React, { useState, useEffect } from "react";
import axios from "axios";

const JokeByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/categories"
        );
        console.log("API response:", response.data); 
        setCategories(response.data);
      } catch (err) {
        setError("Failed to fetch categories");
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  const fetchJoke = async () => {
    if (!selectedCategory) return;
    try {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
      );
      setJoke(response.data.value);
    } catch (err) {
      setError("Failed to fetch joke");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Get Joke by Category</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a category</option>
        {Array.isArray(categories) && categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={fetchJoke}>Get Joke</button>
      <p>{joke}</p>
    </div>
  );
};

export default JokeByCategory;