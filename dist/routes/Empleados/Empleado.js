"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const EmpleadoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    fechaNto: {
        type: Date,
        required: true,
        trim: true,
    },
    idEscala: {
        type: String,
        required: true,
        trim: true
    },
    cargo: {
        type: String,
        required: true,
        trim: true
    },
    salario: {
        type: Number,
        required: true,
        trim: true
    },
    fechaEntrada: {
        type: Date,
        required: true,
        trim: true,
    },
    cesantias: {
        type: Number,
        required: false,
        trim: true,
    },
    vacaciones: {
        type: Number,
        required: false,
        trim: true,
    },
    prima: {
        type: Number,
        required: false,
        trim: true,
    },
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.default.model('Empleado', EmpleadoSchema);
