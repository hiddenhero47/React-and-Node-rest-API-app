const mongoose = require("mongoose");

const PAGE = {
  ONE: "home",
  TWO: "about",
};

const contentSchema = mongoose.Schema(
  {
    header: {
      type: String,
      default: PAGE.HOME,
      enum: [PAGE.ONE, PAGE.TWO],
      required: [true, "Please select a page"],
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
      unique: true,
    },
    description: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, "Please add a description"],
    },
    type: {
      type: String,
      default: "text",
      enum: ["text", "picture", "video"],
      required: [true, "Please add the content type"],
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, "Please add content"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Content", contentSchema);
