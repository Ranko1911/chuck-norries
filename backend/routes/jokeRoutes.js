const express = require("express");
const {
  getRandomJoke,
  getCategoryJoke,
  getQueryJoke,
  getCategories,
} = require("../controllers/jokeController");

const router = express.Router();

router.get("/random", getRandomJoke);
router.get("/categories", getCategories);
router.get("/category/:category", getCategoryJoke);
router.get("/search/:query", getQueryJoke);

module.exports = router;
