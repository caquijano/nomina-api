"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const escalaSalarialSchema = new mongoose_1.Schema({
    cargo: {
        type: String,
        required: true,
        trim: true
    },
    nivel: {
        type: String,
        required: true,
        trim: true
    },
    salario: {
        type: Number,
        required: true,
        trim: true
    },
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.model('EscalaSalarial', escalaSalarialSchema);
