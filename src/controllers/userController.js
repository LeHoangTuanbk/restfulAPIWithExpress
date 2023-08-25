const model = require('../models/');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const saltRounds = 10;

// const plaintextPass1 = "test";
// const plaintextPass2 = "test";

// const testHashFunction = async () => {
//     const hash1 = await bcrypt.hash(plaintextPass1, saltRounds);
//     console.log(hash1);

//     const result = await bcrypt.compare(plaintextPass2,hash1);
//     console.log(result);
// }


// testHashFunction();

const getAllUsers = async (req, res) => {
    try {
        let allUserInfor = await model.User.findAll();
        return res.json(allUserInfor);
    }
    catch (error) {
        return res.send("Error");
    }
}

const addUser = async (req, res) => {
    /*
    username: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING

    */
    let newUser = req.body;
    // console.log(newUser);
    newUser.id = crypto.randomUUID();
    newUser.hashedPassword = await bcrypt.hash(newUser.password,saltRounds);
    newUser.createdAt = new Date;
    newUser.updatedAt = new Date;
    try {
        await model.User.create(newUser);
        return res.send("Add user successfully!")
    }
    catch (error) {
        console.log(error);
        return res.send("Error");
    }
}

const updateUser = async (req, res) => {
    let userUpdateInfor = req.body;
    let userID = userUpdateInfor.id;
    console.log(userUpdateInfor);
    try{
        //Need to code more to check username, email unique before updating.
        await model.User.update(userUpdateInfor,{
            where: {
                id: userID
            }
        });
        res.send("Update user successfully!");
    }
    catch(error){
        res.send("Update fail!");
    }
}

const deleteUser = async (req, res) => {
    let {id} = req.body;
    try{
        await model.User.destroy({
            where: {
                id: id
            }
        })
        res.send("Delete successfully")
    }
    catch(error){
        res.send("Delete fail!");
    }
}

module.exports = {
    getAllUsers: getAllUsers,
    addUser: addUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}