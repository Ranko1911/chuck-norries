import React, { useState } from "react";
import axios from "axios";

const JokeByName = () => {
  const [selectedName, setSelectedName] = useState("");
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    if (!selectedName) return;
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/joke/name/${selectedName}`);
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
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Joke by Name</h2>
        {error && <p className="text-red-500">{error}</p>}
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

export default JokeByName;
