"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEscalaSalarial = exports.getEscalaSalariales = exports.getEscalaSalarial = exports.createEscalaSalarial = void 0;
const EscalaSalarial_1 = __importDefault(require("./EscalaSalarial"));
const createEscalaSalarial = async (req, res) => {
    console.log(req.body);
    const escalaSalarial = new EscalaSalarial_1.default(req.body);
    const savedEscalaSalarial = await escalaSalarial.save();
    res.json(savedEscalaSalarial);
};
exports.createEscalaSalarial = createEscalaSalarial;
const getEscalaSalarial = async (req, res) => {
    const escalaSalarialFound = await EscalaSalarial_1.default.findById(req.params.id);
    if (!escalaSalarialFound) {
        return res.status(204).json({ message: " resource not found..." });
    }
    else {
        return res.json(escalaSalarialFound);
    }
};
exports.getEscalaSalarial = getEscalaSalarial;
const getEscalaSalariales = async (req, res) => {
    const escalaSalarials = await EscalaSalarial_1.default.find();
    try {
        return res.json(escalaSalarials);
    }
    catch (error) {
        return res.json(error);
    }
};
exports.getEscalaSalariales = getEscalaSalariales;
const deleteEscalaSalarial = async (req, res) => {
    const escalaSalarialDelete = await EscalaSalarial_1.default.findByIdAndDelete(req.params.id);
    if (!escalaSalarialDelete) {
        return res.status(204).json({ message: " resource not found..." });
    }
    else {
        return res.json({ message: "escalaSalarial Deleted..." });
    }
};
exports.deleteEscalaSalarial = deleteEscalaSalarial;
