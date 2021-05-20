"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const settingSchema = new mongoose_1.Schema({
    smmlv: {
        type: Number,
        required: true,
        trim: true
    },
    auxTransporte: {
        type: Number,
        required: true,
        trim: true
    },
    smIntegral: {
        type: Number,
        required: true,
        trim: true
    },
    sena: {
        type: Number,
        required: true,
        trim: true
    },
    icbf: {
        type: Number,
        required: true,
        trim: true
    },
    ccf: {
        type: Number,
        required: true,
        trim: true
    },
    primaServicios: {
        type: Number,
        required: true,
        trim: true
    },
    vacaciones: {
        type: Number,
        required: true,
        trim: true
    },
    iscm: {
        type: Number,
        required: true,
        trim: true
    },
    cesantias: {
        type: Number,
        required: true,
        trim: true
    },
    saludEmpleado: {
        type: Number,
        required: true,
        trim: true
    },
    saludEmpresa: {
        type: Number,
        required: true,
        trim: true
    },
    pensionEmpleado: {
        type: Number,
        required: true,
        trim: true
    },
    pensionEmpresa: {
        type: Number,
        required: true,
        trim: true
    },
    hed: {
        type: Number,
        required: true,
        trim: true
    },
    hen: {
        type: Number,
        required: true,
        trim: true
    },
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.model('Setting', settingSchema);
