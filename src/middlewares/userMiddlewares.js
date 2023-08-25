const model = require('../models');

const isDuplicatedInfor = async (req, res, next) => {
    const { username, email } = req.body;
    // console.log(username, email);
    //Check duplicated infor here.
    try {
        let user = null;
        if (username) {
            user = await model.User.findOne({
                where: {
                    username: username
                }
            })
            if (user) {
                return res.status(409).send("Username exists");
            }

        }
        if (email) {
            user = await model.User.findOne({
                where: {
                    email: email
                }
            })
            if(user){
                return res.status(409).send("Email exists");
            }
        }
    }
    catch (error) {

    };

    next();
}

const isExist = async (req, res, next) => {
    const {id} = req.body;
    console.log(id);
    let user = null;
    try{
        if(id){
            user = await model.User.findOne({
                id: id
            })
            if(!user)
            {
                return res.status(404).send("User doesn't exist!");
            }
        }
        else {
            return res.status(404).send("Please include userID");
        }
    }
    catch (error) {

    }
    next();

}

module.exports = {
    isDuplicatedInfor: isDuplicatedInfor,
    isExist: isExist
}