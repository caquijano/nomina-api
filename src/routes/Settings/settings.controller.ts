import { RequestHandler, Response } from "express";
import Setting from "./Setting";


export const createSetting: RequestHandler = async (req, res) => {
        console.log(req.body)
        const setting = new Setting(req.body);
        const savedSetting = await setting.save();
        res.json(savedSetting);
};
export const getSetting: RequestHandler = async (req, res) => {
    const settingFound = await Setting.findById(req.params.id);
    if (!settingFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(settingFound);
    }
};
export const getSettings: RequestHandler = async (req, res) => {
    const settings = await Setting.find();
    try {
        return res.json(settings);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteSettings: RequestHandler = async (req, res) => {
    const settingDelete = await Setting.findByIdAndDelete(req.params.id);
    if (!settingDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "setting Deleted..." });
    }
};
