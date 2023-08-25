const express = require("express");
const userController = require("../controllers/userController");
const {isDuplicatedInfor, isExist} = require("../middlewares/userMiddlewares");

const user = express.Router();

user.get("/allInfor", userController.getAllUsers);
user.post("/add", isDuplicatedInfor, userController.addUser);
user.put("/update", isExist, userController.updateUser);
user.delete("/delete", isExist, userController.deleteUser);

module.exports = {
    user: user
};