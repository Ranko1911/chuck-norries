import React, { useState } from "react";
import axios from "axios";

const JokeCategoriesAndName = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);

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

  const fetchJoke = async () => {
    if (!selectedCategory || !selectedName) return;
    try {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${selectedCategory}&name=${selectedName}`
      );
      setJoke(response.data.value);
    } catch (err) {
      setError("Failed to fetch joke");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Get Joke by Category and Name</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={fetchCategories}>Get Categories</button>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a category</option>
        {Array.isArray(categories) &&
          categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>
      <input
        type="text"
        placeholder="Enter a name"
        value={selectedName}
        onChange={(e) => setSelectedName(e.target.value)}
      />
      <button onClick={fetchJoke}>Get Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default JokeCategoriesAndName;