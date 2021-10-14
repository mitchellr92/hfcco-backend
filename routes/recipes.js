const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Recipe = require("../models/Recipe");

// @route     POST api/add-recipe
// @desc      Add new recipe
// @access    Private
router.post("/", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { teamName, recipeName, ingredients, directions, cookTime } = req.body;

  try {
    const newRecipe = new Recipe({
      teamName,
      recipeName,
      ingredients,
      directions,
      cookTime
    });

    const recipe = await newRecipe.save();

    res.json(recipe);
    console.log(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
