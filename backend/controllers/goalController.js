const asyncHandler = require('express-async-handler')

// @disc Get goals
// @route GET/api/goals
// @access Privet
const getGoals = asyncHandler(async(req, res) => {
  res.status(200).json({ massage: "Get goals" });
});

// @disc Set goals
// @route POST/api/goals
// @access Privet
const setGoals = asyncHandler(async(req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  res.status(200).json({ massage: "Set goals" });
});

// @disc Update goals
// @route PUT/api/goals/:id
// @access Privet
const updateGoals = asyncHandler(async(req, res) => {
  res.status(200).json({ massage: `Update goals ${req.params.id}` });
});

// @disc Delete goals
// @route DELETE/api/goals/:id
// @access Privet
const deleteGoals = asyncHandler(async(req, res) => {
  res.status(200).json({ massage: `Delete goals ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
