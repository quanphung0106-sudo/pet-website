const express = require("express");
const router = express.Router();

const AuthController = require("../app/controllers/AuthController");
const Token = require("../app/models/Token");
const { verifyAdmin } = require("../utils/verifyToken");

router.post("/register", AuthController.createUser);
router.post("/login", AuthController.userLogin);
router.post("/refresh-token/:id", AuthController.refreshToken);
router.post("/reset-password", AuthController.resetPassword);
router.post("/change-password", AuthController.changePassword);
router.get("/", AuthController.getToken);
router.delete("/", verifyAdmin, async (req, res) => {
  try {
    await Token.remove();
    res.status(200).json("Deleted all tokens");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
