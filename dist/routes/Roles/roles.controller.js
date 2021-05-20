"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoles = exports.getRol = void 0;
const Role_1 = __importDefault(require("./Role"));
const getRol = async (req, res) => {
    const rol = await Role_1.default.findById(req.params.id);
    try {
        return res.json(rol.name);
    }
    catch (error) {
        return res.json(error);
    }
};
exports.getRol = getRol;
const getRoles = async (req, res) => {
    const roles = await Role_1.default.find();
    try {
        return res.json(roles);
    }
    catch (error) {
        return res.json(error);
    }
};
exports.getRoles = getRoles;
