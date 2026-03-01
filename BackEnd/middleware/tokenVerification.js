const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken")
require("dotenv").config();
const config = require("../config/config");
const User = require("../model/userModel")

const isVerifiedUser = async (req, res, next) => {
    try {
        const { accessToken } = req.cookies;

        if(!accessToken){
            const error = createHttpError(401, "Please Provide Token");
            return next(error);
        }

        const decodeToken = jwt.verify(accessToken, config.accessTokenSecret)

        const user = await User.findById(decodeToken._id);
        if(!user){
            const error = createHttpError(401, "User does not exist");
            return next(error);
        }

        req.user = user;
        next();

    } catch (error) {
        const err = createHttpError(401, "invalid Token");
        next(err);
    }
}

module.exports = { isVerifiedUser };