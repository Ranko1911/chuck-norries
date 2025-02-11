import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomJoke = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/joke");
      setJoke(response.data.value);
    } catch (error) {
      console.error("Error fetching joke", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Chuck Norris Jokes
        </h1>
        <button
          onClick={fetchJoke}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? "Loading..." : "Get another joke"}
        </button>
        <div className="text-lg text-gray-700 min-h-[80px] flex items-center justify-center">
          {loading ? <span className="animate-spin">🔄</span> : <p>{joke}</p>}
        </div>
      </div>
    </div>
  );
};

export default RandomJoke;
