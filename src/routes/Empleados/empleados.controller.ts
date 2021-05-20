import { RequestHandler, Response } from "express";
import Empleado from "./Empleado";


export const createEmpleado: RequestHandler = async (req, res) => {
        console.log(req.body)
        const empleado = new Empleado(req.body);
        const savedEmpleado = await empleado.save();
        res.json(savedEmpleado);
};
export const getEmpleado: RequestHandler = async (req, res) => {
    const empleadoFound = await Empleado.findById(req.params.id);
    if (!empleadoFound) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json(empleadoFound);
    }
};
export const getEmpleados: RequestHandler = async (req, res) => {
    const empleados = await Empleado.find();
    try {
        return res.json(empleados);
    } catch (error) {
        return res.json(error);
    }
};
export const deleteEmpleados: RequestHandler = async (req, res) => {
    const empleadoDelete = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleadoDelete) {
        return res.status(204).json({ message: " resource not found..." });
    } else {
        return res.json({ message: "empleado Deleted..." });
    }
};