const fetch = require("node-fetch");

const jokesCategories = [
  "animal", "career", "celebrity", "dev", "explicit", "fashion", "food",
  "history", "money", "movie", "music", "political", "religion", "science",
  "sport", "travel"
];

// Obtener chiste aleatorio
const getRandomJoke = async (req, res) => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    res.status(200).json({ joke: data.value });
  } catch (error) {
    res.status(400).json({ error: "Error fetching joke" });
  }
};

// Obtener chiste por categoría
const getCategoryJoke = async (req, res) => {
  try {
    const categoriesResponse = await fetch("https://api.chucknorris.io/jokes/categories");
    console.log(categoriesResponse);
    const { category } = req.params;
    if (!categoriesResponse.includes(category)) {
      return res.status(400).json({ error: "Category not found" });
    }
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const data = await response.json();
    res.status(200).json({ joke: data.value });
  } catch (error) {
    res.status(400).json({ error: "Error fetching joke" });
  }
};

// Buscar chistes por texto
const getQueryJoke = async (req, res) => {
  try {
    const { query } = req.params;
    const response = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    );
    const data = await response.json();
    res.status(200).json({ jokes: data.result });
  } catch (error) {
    res.status(400).json({ error: "Error fetching joke" });
  }
};

// Obtener categorías de chistes
const getCategories = async (req, res) => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/categories");
    console.log(response);
    const data = await response.json();
    console.log(data);
    res.status(200).json({ categories: data });
  } catch (error) {
    res.status(400).json({ error: "Error fetching categories" });
  }
};

module.exports = {
  getRandomJoke,
  getCategoryJoke,
  getQueryJoke,
  getCategories
};
