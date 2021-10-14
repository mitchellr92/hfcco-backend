const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  teamName: {
    type: String
  },
  recipeName: {
    type: String
  },
  ingredients: {
    type: Array
  },
  directions: {
    type: String
  },
  cookTime: {
    type: String
  }
});

module.exports = mongoose.model("recipe", recipeSchema)