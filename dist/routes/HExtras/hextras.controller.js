"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHExtras = exports.getHExtras = exports.getHExtra = exports.createHExtra = void 0;
const HExtra_1 = __importDefault(require("./HExtra"));
const createHExtra = async (req, res) => {
    console.log(req.body);
    const hextra = new HExtra_1.default(req.body);
    const savedHExtra = await hextra.save();
    res.json(savedHExtra);
};
exports.createHExtra = createHExtra;
const getHExtra = async (req, res) => {
    const hextraFound = await HExtra_1.default.findById(req.params.id);
    if (!hextraFound) {
        return res.status(204).json({ message: " resource not found..." });
    }
    else {
        return res.json(hextraFound);
    }
};
exports.getHExtra = getHExtra;
const getHExtras = async (req, res) => {
    const hextras = await HExtra_1.default.find();
    try {
        return res.json(hextras);
    }
    catch (error) {
        return res.json(error);
    }
};
exports.getHExtras = getHExtras;
const deleteHExtras = async (req, res) => {
    const hextraDelete = await HExtra_1.default.findByIdAndDelete(req.params.id);
    if (!hextraDelete) {
        return res.status(204).json({ message: " resource not found..." });
    }
    else {
        return res.json({ message: "hextra Deleted..." });
    }
};
exports.deleteHExtras = deleteHExtras;
