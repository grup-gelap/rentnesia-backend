const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/", UserController.getUser);

router.route("/:id").get(UserController.getUserById);

module.exports = router;
