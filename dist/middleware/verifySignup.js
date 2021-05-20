"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRolesExisted = exports.checkDuplicateUsernameOrEmail = void 0;
const User_1 = __importDefault(require("../routes/Users/User"));
const Role_1 = require("../routes/Roles/Role");
const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        const email = await User_1.default.findOne({ email: req.body.email });
        if (email)
            return res.status(404).send({ message: "The email already exists" });
        next();
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.checkDuplicateUsernameOrEmail = checkDuplicateUsernameOrEmail;
const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!Role_1.ROLES.includes(req.body.roles[i])) {
                return res.status(404).json({
                    message: `Role ${req.body.roles[i]} does not exist`,
                });
            }
        }
    }
    next();
};
exports.checkRolesExisted = checkRolesExisted;
