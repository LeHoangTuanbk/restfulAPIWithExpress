const express = require("express");
const userController = require("../controllers/userController");


const user = express.Router();

user.get("/allInfor", userController.getAllUsers);
user.post("/add", userController.addUser);
user.put("/update", userController.updateUser);
user.delete("/delete", userController.deleteUser);

module.exports = {
    user: user
};