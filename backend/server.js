require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// GET random joke
app.get("/api/joke", async (req, res) => {
    try {
        const response = await axios.get("https://api.chucknorris.io/jokes/random");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching joke" });
    }
});

// GET joke categories
app.get("/api/categories", async (req, res) => {
    try {
        const response = await axios.get("https://api.chucknorris.io/jokes/categories");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching categories" });
    }
});

// GET joke by category
app.get("/api/joke/:category", async (req, res) => {
    try {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${req.params.category}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching joke" });
    }
});

// GET search joke
app.get("/api/search/:query", async (req, res) => {
    try {
        const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${req.params.query}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching joke" });
    }
});

// Get joke by category and name
app.get("/api/:category&name=:name", async (req, res) => {
    try {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${req.params.category}&name=${req.params.name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching joke" });
    }
});

// GET joke by name
app.get("/api/joke/name/:name", async (req, res) => {
    try {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?name=${req.params.name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching joke" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
