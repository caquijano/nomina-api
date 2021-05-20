"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.isModerator = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const User_1 = __importDefault(require("../routes/Users/User"));
const Role_1 = __importDefault(require("../routes/Roles/Role"));
const verifyToken = async (req, res, next) => {
    let token;
    console.log(res.body);
    if (req.params.token) {
        token = req.params.token.replace(/['"]+/g, '');
    }
    else {
        token = req.body.token.replace(/['"]+/g, '');
    }
    if (!token)
        return res.status(403).json({ message: "No token provided" });
    try {
        let decodedData;
        decodedData = jsonwebtoken_1.default.verify(token, config_1.default.SECRET);
        req.userId = decodedData?._id;
        const user = await User_1.default.findById(decodedData.id);
        if (!user)
            return res.status(404).json({ message: "No user found" });
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
};
exports.verifyToken = verifyToken;
const isModerator = async (req, res, next) => {
    let token;
    if (req.params.token) {
        token = req.params.token.replace(/['"]+/g, '');
    }
    else {
        token = req.body.token.replace(/['"]+/g, '');
    }
    try {
        let decodedData;
        decodedData = jsonwebtoken_1.default.verify(token, config_1.default.SECRET);
        const user = await User_1.default.findById(decodedData.id);
        const roles = await Role_1.default.find({ _id: { $in: user.roles } });
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "moderator") {
                next();
                return;
            }
        }
        return res.status(403).json({ message: "Require Moderator Role!" });
    }
    catch (error) {
        return res.status(500).send({ message: error });
    }
};
exports.isModerator = isModerator;
const isAdmin = async (req, res, next) => {
    let token;
    if (req.params.token) {
        token = req.params.token.replace(/['"]+/g, '');
    }
    else {
        token = req.body.token.replace(/['"]+/g, '');
    }
    try {
        let decodedData;
        decodedData = jsonwebtoken_1.default.verify(token, config_1.default.SECRET);
        const user = await User_1.default.findById(decodedData.id);
        const roles = await Role_1.default.find({ _id: { $in: user.roles } });
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "admin") {
                next();
                return;
            }
        }
        return res.status(403).json({ message: "Require Admin Role!" });
    }
    catch (error) {
        return res.status(500).send({ message: error });
    }
};
exports.isAdmin = isAdmin;
