import { RequestHandler, Response } from "express";
import EscalaSalarial from "./EscalaSalarial";


export const createEscalaSalarial: RequestHandler = async (req, res) => {
        console.log(req.body)
        const escalaSalarial = new EscalaSalarial(req.body);
        const savedEscalaSalarial = await escalaSalarial.save();
        res.json(savedEscalaSalarial);
};
export const getEscalaSalarial: RequestHandler = async (req, res) => {
    const escalaSalarialFound = await EscalaSalarial.findById(req.params.id);
    if (!escalaSalarialFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(escalaSalarialFound);
    }
};
export const getEscalaSalariales: RequestHandler = async (req, res) => {
    
    const escalaSalarials = await EscalaSalarial.find();
    try {
        return res.json(escalaSalarials);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteEscalaSalarial: RequestHandler = async (req, res) => {
    const escalaSalarialDelete = await EscalaSalarial.findByIdAndDelete(req.params.id);
    if (!escalaSalarialDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "escalaSalarial Deleted..." });
    }
};
