import React,{ useState } from "react";
import axios from "axios";

const JokeByQuery = () => { 
  const [query, setQuery] = useState("");
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    if (!query) return;
    try {
      const response = await axios.get(
        `http://localhost:5000/api/search/${query}`
      );
      setJoke(response.data.result[0].value);
    } catch (err) {
      setError("Failed to fetch joke");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Get Joke by Query</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Enter a query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchJoke}>Get Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default JokeByQuery;