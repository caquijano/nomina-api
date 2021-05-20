"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSettings = exports.getSettings = exports.getSetting = exports.createSetting = void 0;
const Setting_1 = __importDefault(require("./Setting"));
const createSetting = async (req, res) => {
    console.log(req.body);
    const setting = new Setting_1.default(req.body);
    const savedSetting = await setting.save();
    res.json(savedSetting);
};
exports.createSetting = createSetting;
const getSetting = async (req, res) => {
    const settingFound = await Setting_1.default.findById(req.params.id);
    if (!settingFound) {
        return res.status(204).json({ message: " resource not found..." });
    }
    else {
        return res.json(settingFound);
    }
};
exports.getSetting = getSetting;
const getSettings = async (req, res) => {
    const settings = await Setting_1.default.find();
    try {
        return res.json(settings);
    }
    catch (error) {
        return res.json(error);
    }
};
exports.getSettings = getSettings;
const deleteSettings = async (req, res) => {
    const settingDelete = await Setting_1.default.findByIdAndDelete(req.params.id);
    if (!settingDelete) {
        return res.status(204).json({ message: " resource not found..." });
    }
    else {
        return res.json({ message: "setting Deleted..." });
    }
};
exports.deleteSettings = deleteSettings;
