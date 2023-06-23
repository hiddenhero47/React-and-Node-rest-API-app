const asyncHandler = require("express-async-handler");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require('fs');
const Goal = require("../models/goalsModel");
const User = require("../models/userModel");
const Content = require("../models/contentModel");

// File Saving 

const saveFile = (file) => {
  let folder;
  if (file.mimetype.startsWith("image/")) {
    folder = "./backend/public/pictures";
  } else if (file.mimetype.startsWith("video/")) {
    folder = "./backend/public/videos";
  } else {
    folder = "./backend/public";
  }
  const fileId = uuidv4();
  const originalFileName = file.originalname;
  const extension = path.extname(originalFileName);
  const uniqueFileName =
    originalFileName.replace(extension, "") + "-" + fileId + extension;

    const filePath = path.join(folder, uniqueFileName);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, file['buffer'], (err) => {
      if (err) {
        console.error('Error saving image:', err);
        reject(err);
      } else {
        console.log('File saved successfully!');
        resolve({ 
          Url: `${process.env.BASE_URL}/${filePath}`,
          Path: filePath,
          FileName: uniqueFileName,
        });
      }
    });
  });
};

const saveMultipleFiles = async (files) => {
  const filePaths = [];
  for (let i = 0; i < files.length; i++) {
    const filePath = await saveFile(files[i]);
    filePaths.push(filePath);
  }
  return filePaths;
};

// File Arranger

const arrangerData = (data) => {
  return data.map((obj) => {
    const transformedObj = { ...obj }; // Copy the original object

    if (Array.isArray(obj.content) && obj.content.length > 0) {
      transformedObj.content = obj.content.map((item) => item.Url);
    } else {
      transformedObj.content = obj.content.Url || obj.content;
    }

    return transformedObj;
  });
};

// @disc Get users
// @route GET/api/app/users
// @access Privet
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

// @disc Update User Role
// @route PUT/api/app/users/:id
// @access Privet
const updateUserRole = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if (user.role === "admin") {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedRole = await User.findByIdAndUpdate(req.params.id, {role: req.body.role}, {
    new: true,
  });

  res.status(200).json(updatedRole);
});

// @disc Delete User Role
// @route DELETE/api/app/users/:id
// @access Privet
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if (user.role === "admin") {
    res.status(401);
    throw new Error("User not authorized");
  }

  const goals = await Goal.find({ user: user.id });
  if (goals) {
    await Goal.deleteMany({user: req.params.id});
  }

  await User.deleteOne(user);

  res.status(200).json({ id: req.params.id, NosGoals: goals.length });
});

// @disc Get User Goals
// @route GET/api/app/users/goals/:id"
// @access Privet
const getUserGoals = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const goals = await Goal.find({ user: user.id });

  res.status(200).json(goals);
});

// @disc Update User Goals
// @route PUT/api/app/users/goals/:id"
// @access Privet
const updateUserGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);
  const goalUser = await User.findById(goal.user.toString());

  console.log(goalUser);

  //Check for user
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if (goalUser.role === "admin") {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res
    .status(200)
    .json({ UpdatedGoal: updatedGoal, UpdatedUser: goalUser, UpdatedBy: user.name });
});

// @disc Delete User Goals
// @route DELETE/api/app/users/goals/:id"
// @access Privet
const deleteUserGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);
  const goalUser = await User.findById(goal.user.toString());

  //Check for user
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if (goalUser.role === "admin") {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Goal.deleteOne(goal);

  res.status(200).json({
    DeletedGoal: req.params.id,
    DeletedGoalUser: goalUser.name,
    DeletedBy: user.name,
  });
});

// @disc Get Content
// @route GET/api/app/content
// @access General
const getContent = asyncHandler(async (req, res) => {
  const content = await Content.find();
  const appContent = content.length === 0 ? content : arrangerData(content);

  res.status(200).json(appContent);
});

// @disc Set Content
// @route POST/api/app/content
// @access Privet
const setContent = asyncHandler(async (req, res) => {

  const { header, title, description, type, content } = req.body;

  if (!header || !title || !description || !type || !content && req.files <= 0) {
    res.status(400);
    throw new Error("Missing required fields");
  }

  // Check if title exists
  const titleExists = await Content.findOne({ title });

  if (titleExists) {
    res.status(400);
    throw new Error("Title already exists");
  }

  let fileData;

  if (type !== "text") {
    if (req.files.length > 1) {
      fileData = await saveMultipleFiles(req.files)
    } else {
      fileData = await saveFile(req.files[0])
    }
  }

  const createContent = {
    header,
    title,
    description,
    type,
    content: type === "text" ? content : fileData,
  };

  const saveContent = await Content.create(createContent)

  if (createContent) {
    res.status(200).json(saveContent);
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

module.exports = {
  getUsers,
  updateUserRole,
  deleteUser,
  getUserGoals,
  updateUserGoal,
  deleteUserGoals,
  getContent,
  setContent,
};
