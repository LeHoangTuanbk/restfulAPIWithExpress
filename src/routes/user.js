const express = require("express");


const router = express.Router();

router.get("/", (req,res) => {
    res.send("Get all users infor");
})

module.exports = {
    user: router
};