const asyncHandler = require("express-async-handler");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const Goal = require("../models/goalsModel");
const User = require("../models/userModel");
const Content = require("../models/contentModel");
const {
  arrangeContent,
  arrangeStoredContent,
  arrangeStoredUrl,
} = require("../helpers/arrangeData");

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

  let AppFolder;
  if (file.mimetype.startsWith("image/")) {
    AppFolder = "pictures";
  } else if (file.mimetype.startsWith("video/")) {
    AppFolder = "videos";
  } else {
    AppFolder = "";
  }

  const fileId = uuidv4();
  const originalFileName = file.originalname;
  const extension = path.extname(originalFileName);
  const fileNameWithoutExtension = originalFileName.replace(extension, "");
  const fileNameWithoutSpaces = fileNameWithoutExtension.replace(/\s+/g, "");
  const uniqueFileName = fileNameWithoutSpaces + "-" + fileId + extension;

  const filePath = path.join(folder, uniqueFileName);
  const AppFilePath = path.join(AppFolder, uniqueFileName);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, file["buffer"], (err) => {
      if (err) {
        console.error("Error saving image:", err);
        reject(err);
      } else {
        console.log("File saved successfully!");
        resolve({
          Url: `${process.env.BASE_URL}/${AppFilePath}`,
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

// File Deleting
const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
        reject(err);
      }
      console.log("File deleted successfully.");
      resolve(filePath);
    });
  });
};

const deleteMultipleFiles = async (filePaths) => {
  const deletedFiles = [];
  for (let i = 0; i < filePaths.length; i++) {
    const filePath = filePaths[i];
    const details = await deleteFile(filePath);
    deletedFiles.push(details);
  }
  return filePaths;
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

  const updatedRole = await User.findByIdAndUpdate(
    req.params.id,
    { role: req.body.role },
    {
      new: true,
    }
  );

  res.status(200).json(updatedRole);
});

// @disc Delete User
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
    await Goal.deleteMany({ user: req.params.id });
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
    .json({
      UpdatedGoal: updatedGoal,
      UpdatedUser: goalUser,
      UpdatedBy: user.name,
    });
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
  const appContent = content.length > 0 ? arrangeContent(content) : content;

  res.status(200).json(appContent);
});

// @disc Set Content
// @route POST/api/app/content
// @access Privet
const setContent = asyncHandler(async (req, res) => {
  const { header, title, description, type, content } = req.body;

  if (
    !header ||
    !title ||
    !description ||
    !type ||
    (!content && req.files <= 0)
  ) {
    res.status(400);
    throw new Error("Missing required fields");
  }

  // Check if title exists
  const titleExists = await Content.findOne({ title });

  if (titleExists) {
    res.status(400);
    throw new Error("Title already exists");
  }

  // Checking for content type error
  if ((type === "text" && !content) || (type !== "text" && req.files <= 0)) {
    res.status(400);
    throw new Error("Wrong content type");
  }

  let fileData;

  if (type !== "text") {
    if (req.files.length > 1) {
      fileData = await saveMultipleFiles(req.files);
    } else {
      fileData = await saveFile(req.files[0]);
    }
  }

  const createContent = {
    header,
    title,
    description,
    type,
    content: type === "text" ? content : fileData,
  };

  const saveContent = await Content.create(createContent);

  if (createContent) {
    res.status(200).json(saveContent);
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

// @disc Update Content
// @route PUT/api/app/content/:id
// @access Privet
const updateContent = asyncHandler(async (req, res) => {
  if (!req.params.id || req.params.id === undefined) {
    res.status(400);
    throw new Error("No id");
  }

  const findContentDB = await Content.findById(req.params.id);

  if (!findContentDB) {
    res.status(400);
    throw new Error("Content not found");
  }
  const contentDB = arrangeStoredContent(findContentDB);

  const { header, title, description, type, content } = req.body;

  if (
    !header ||
    !title ||
    !description ||
    !type ||
    (!content && req.files <= 0)
  ) {
    res.status(400);
    throw new Error("Missing required fields");
  }

  const titleExists = await Content.findOne({ title });

  if (titleExists && title !== contentDB.title) {
    res.status(400);
    throw new Error("Title already exists");
  }

  // Check if content are the same
  let ifTheSame = false;
  if (content && type !== "text") {
    let mongoContent = arrangeStoredUrl(findContentDB).content;
    let clientContent = Array.isArray(content) ? content : [content];

    if (Array.isArray(mongoContent)) {
      mongoContent = mongoContent.join(", ");
    }

    clientContent = clientContent.join(", ");

    if (mongoContent === clientContent) {
      ifTheSame = true;
    }
  }

  // Checking for content type error
  if (
    (type === "text" && !content) ||
    (type !== "text" && req.files <= 0 && !ifTheSame)
  ) {
    res.status(400);
    throw new Error("Wrong content type");
  }

  let NewContent;
  let deletedFile;

  if (type !== "text" && !req.files <= 0 && !ifTheSame) {
    if (req.files.length > 1) {
      NewContent = await saveMultipleFiles(req.files);
    } else {
      NewContent = await saveFile(req.files[0]);
    }
    if (Array.isArray(contentDB.content)) {
      deletedFile = await deleteMultipleFiles(contentDB.content);
    } else if (contentDB.type !== "text") {
      deletedFile = await deleteFile(contentDB.content);
    }
  } else if (type === "text" && contentDB.type !== "text") {
    NewContent = content;
    if (Array.isArray(contentDB.content)) {
      deletedFile = await deleteMultipleFiles(contentDB.content);
    } else {
      deletedFile = await deleteFile(contentDB.content);
    }
  } else {
    NewContent = content;
  }

  const UpdateContent = {
    header,
    title,
    description,
    type,
    content: NewContent,
  };

  const updatedContent = await Content.findByIdAndUpdate(
    req.params.id,
    UpdateContent,
    {
      new: true,
    }
  );

  res.status(200).json(updatedContent);
});

// @disc Delete Content
// @route DELETE/api/app/content/:id
// @access Privet
const deleteContent = asyncHandler(async (req, res) => {
  const findContentDB = await Content.findById(req.params.id);

  if (!findContentDB) {
    res.status(400);
    throw new Error("Content not found");
  }
  const contentDB = arrangeStoredContent(findContentDB);

  let deletedFile;

  if (contentDB.type !== "text") {
    if (Array.isArray(contentDB.content)) {
      deletedFile = await deleteMultipleFiles(contentDB.content);
    } else {
      deletedFile = await deleteFile(contentDB.content);
    }
  }
  await Content.deleteOne(findContentDB);

  res.status(200).json(`${contentDB.header} ${contentDB.title}`);
});

// @disc Get Content By SearchField
// @route GET/api/app/content/:searchField
// @access General
const getContentBySearchField = asyncHandler(async (req, res) => {
  const searchField = req.params.searchField;
  const { searchString } = req.query.searchString;

  const validFields = ["id", "header", "title"];
  if (!validFields.includes(searchField)) {
    res.status(400);
    throw new Error("Unknown search field");
  }

  const query = searchField === "id" ? { _id: searchString } : { [searchField]: searchString };
  const content = await Content.find(query);

  res.status(200).json(content.length > 0 ? arrangeContent(content) : content);
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
  updateContent,
  deleteContent,
  getContentBySearchField,
};
