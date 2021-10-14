const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Recipe = require("../models/Recipe");

// @route     GET api/recipes
// @desc      Get all recipes
// @access    Public
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json({ recipes });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
