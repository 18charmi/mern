const Recipe = require("../models/recipeModal");
const mongoose = require("mongoose");
// get all recipes
const getRecipes = async (req, res) => {
  const recipes = await Recipe.find({}).sort({ createdAt: -1 });

  res.status(200).json(recipes);
};
// get single recipe
const getRecipe = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Recipe found" });
  }

  const recipe = await Recipe.findById(id);

  if (!recipe) {
    return res.status(404).json({ error: "No Recipe found" });
  }
  res.status(200).json(recipe);
};

// create new recipe
const createRecipe = async (req, res) => {
  const { title, duration, recipeType } = req.body;
  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!duration) {
    emptyFields.push("duration");
  }
  if (!recipeType) {
    emptyFields.push("recipeType");
  }

  if(emptyFields.length > 0) {
    res.status(400).json({ error: `Please fill in all the fields`, emptyFields });
  }

  // add doc to DB
  try {
    const recipe = await Recipe.create({ title, duration, recipeType });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a recipe
const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Recipe found" });
  }

  const recipe = await Recipe.findOneAndDelete({ _id: id });
  if (!recipe) {
    return res.status(404).json({ error: "No Recipe found" });
  }
  res.status(200).json(recipe);
};

// update a recipe
const updateRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Recipe found" });
  }
  const recipe = await Recipe.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!recipe) {
    return res.status(404).json({ error: "No Recipe found" });
  }
  res.status(200).json(recipe);
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
};