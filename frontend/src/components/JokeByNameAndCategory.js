import React, { useState } from "react";
import axios from "axios";

const JokeCategoriesAndName = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categories");
      console.log("API response:", response.data);
      setCategories(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch categories");
      console.error(err);
    }
  };

  const fetchJoke = async () => {
    if (!selectedCategory || !selectedName) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/${selectedCategory}&name=${selectedName}`
      );
      setJoke(response.data.value);
      setError(null);
    } catch (err) {
      setError("Failed to fetch joke");
      console.error(err);
      setJoke("");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Joke by Category and Name</h2>
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={fetchCategories}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Get Categories
        </button>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
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
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setSelectedName(e.target.value)}
        />
        <button
          onClick={fetchJoke}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? "Loading..." : "Get Joke"}
        </button>
        <p className="text-lg text-gray-700 min-h-[80px] flex items-center justify-center mt-4">
          {loading ? <span className="animate-spin">🔄</span> : joke}
        </p>
      </div>
    </div>
  );
};

export default JokeCategoriesAndName;
