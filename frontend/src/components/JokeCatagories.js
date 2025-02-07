import React, { useState } from "react";
import axios from "axios";

const JokeCatagories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/categories"
      );
      console.log("API response:", response.data);
      setCategories(response.data);
    } catch (err) {
      setError("Failed to fetch categories");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Get Joke by Category</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={fetchCategories}>Get Categories</button>
      <ul>
        {Array.isArray(categories) &&
          categories.map((cat) => <li key={cat}>{cat}</li>)}
      </ul>
    </div>
  );
};

export default JokeCatagories;