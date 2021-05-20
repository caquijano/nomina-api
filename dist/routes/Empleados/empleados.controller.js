"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmpleados = exports.getEmpleados = exports.getEmpleado = exports.createEmpleado = void 0;
const Empleado_1 = __importDefault(require("./Empleado"));
const createEmpleado = async (req, res) => {
    console.log(req.body);
    const empleado = new Empleado_1.default(req.body);
    const savedEmpleado = await empleado.save();
    res.json(savedEmpleado);
};
exports.createEmpleado = createEmpleado;
const getEmpleado = async (req, res) => {
    const empleadoFound = await Empleado_1.default.findById(req.params.id);
    if (!empleadoFound) {
        return res.status(204).json({ message: " resource not found..." });
    }
    else {
        return res.json(empleadoFound);
    }
};
exports.getEmpleado = getEmpleado;
const getEmpleados = async (req, res) => {
    const empleados = await Empleado_1.default.find();
    try {
        return res.json(empleados);
    }
    catch (error) {
        return res.json(error);
    }
};
exports.getEmpleados = getEmpleados;
const deleteEmpleados = async (req, res) => {
    const empleadoDelete = await Empleado_1.default.findByIdAndDelete(req.params.id);
    if (!empleadoDelete) {
        return res.status(204).json({ message: " resource not found..." });
    }
    else {
        return res.json({ message: "empleado Deleted..." });
    }
};
exports.deleteEmpleados = deleteEmpleados;
