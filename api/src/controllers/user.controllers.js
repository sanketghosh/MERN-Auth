import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

// @description Auth user/set token
// route POST /api/v1/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

// @description Register user
// route POST /api/v1/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @description Logout user
// route POST /api/v1/users/logout
// @access public

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout user" });
});

// @description Get user profile
// route  GET  /api/v1/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get user profile" });
});

// @description Update user profile
// route   UPDATE /api/v1/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
