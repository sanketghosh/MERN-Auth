/*

- **POST  /api/users** - register an user
- **POST /api/users/auth** - authenticate an user and get token
- **POST /api/users/logout** - logout user and clear cookie 
- **GET /api/users/profile** - get user profile
- **PUT /api/users/profile** - update profile

*/
import express from "express";

import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/user.controllers.js";

const router = express.Router();

/* routes */
router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
