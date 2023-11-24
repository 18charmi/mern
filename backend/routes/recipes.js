const express = require("express");
const {
  createRecipe,
  getRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

// GET all recipes
router.get("/", getRecipes);

// GET single recipe
router.get("/:id", getRecipe);

// POST single recipe
router.post("/", createRecipe);

// DELETE single recipe
router.delete("/:id", deleteRecipe);

// UPDATE a single recipe
router.patch("/:id", updateRecipe);

module.exports = router;
