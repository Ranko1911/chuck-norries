import React, {useState} from "react";
import axios from "axios";

const JokeByName = () => {
  const [selectedName, setSelectedName] = useState("");
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    if (!selectedName) return;
    try {
      const response = await axios.get(
        `http://localhost:5000/api/joke/name/${selectedName}`
      );
      setJoke(response.data.value);
    } catch (err) {
      setError("Failed to fetch joke");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Get Joke by Name</h2>
      {error && <p style={{color: "red"}}>{error}</p>}
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

export default JokeByName;