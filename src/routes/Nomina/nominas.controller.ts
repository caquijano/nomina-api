import { RequestHandler, Response } from "express";
import Nomina from "./Nomina";


export const createNomina: RequestHandler = async (req, res) => {
        console.log(req.body)
        const nomina = new Nomina(req.body);
        const savedNomina = await nomina.save();
        res.json(savedNomina);
};
export const getNomina: RequestHandler = async (req, res) => {
    const nominaFound = await Nomina.findById(req.params.id);
    if (!nominaFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(nominaFound);
    }
};
export const getNominas: RequestHandler = async (req, res) => {
    const nominas = await Nomina.find();
    try {
        return res.json(nominas);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteNominas: RequestHandler = async (req, res) => {
    const nominaDelete = await Nomina.findByIdAndDelete(req.params.id);
    if (!nominaDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "nomina Deleted..." });
    }
};