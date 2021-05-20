import { RequestHandler, Response } from "express";
import HExtra from "./HExtra";


export const createHExtra: RequestHandler = async (req, res) => {
        console.log(req.body)
        const hextra = new HExtra(req.body);
        const savedHExtra = await hextra.save();
        res.json(savedHExtra);
};
export const getHExtra: RequestHandler = async (req, res) => {
    const hextraFound = await HExtra.findById(req.params.id);
    if (!hextraFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(hextraFound);
    }
};
export const getHExtras: RequestHandler = async (req, res) => {

    const hextras = await HExtra.find().sort({fechaNovedad:1});
    try {
        return res.json(hextras);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteHExtras: RequestHandler = async (req, res) => {
    const hextraDelete = await HExtra.findByIdAndDelete(req.params.id);
    if (!hextraDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "hextra Deleted..." });
    }
};