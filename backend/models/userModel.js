const mongoose = require("mongoose");

const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    role: {
      type: String,
      default: ROLE.BASIC,
      enum: [ROLE.BASIC, ROLE.ADMIN],
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to prevent random users from setting role as 'admin'
userSchema.pre("save", function (next) {
  if (this.role === ROLE.ADMIN && this.role === ROLE.ADMIN && this.currentUserRole !== ROLE.ADMIN) {
    // If the role is set to 'admin', do not proceed with saving
    // check if the current user's role is also 'admin'.
    // If not, return a 401 Unauthorized response.
    const error = new Error("Setting role as admin is not allowed.");
    error.status = 401; // Set the status code to 401
    return next(error);

  } else {
    // Role is valid, continue with saving
    next();
  }
});

module.exports = mongoose.model("User", userSchema);
