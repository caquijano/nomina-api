import mongoose, { Schema, model, Document } from "mongoose";

export interface SettingInterface extends Document {
    smmlv: number;
    auxTransporte:number;
    smIntegral:number;
    sena: number;
    icbf:number;
    ccf:number;
    primaServicios:number;
    vacaciones:number;
    iscm:number;
    cesantias:number;
    saludEmpleado: number;
    saludEmpresa: number;
    pensionEmpleado: number;
    pensionEmpresa: number;
    hed:number;
    hen:number;
    createAt?: string | Date;
    updateAt?: string | Date;
  }
 
const settingSchema = new Schema({
    smmlv:{
        type: Number,
        required: true,
        trim:true
    },
    auxTransporte:{
        type: Number,
        required: true,
        trim:true
    },
    smIntegral:{
        type: Number,
        required: true,
        trim:true
    },
    sena:{
        type: Number,
        required: true,
        trim:true
    },
    icbf:{
        type: Number,
        required: true,
        trim:true
    },
    ccf:{
        type: Number,
        required: true,
        trim:true
    },
    primaServicios:{
        type: Number,
        required: true,
        trim:true
    },
    vacaciones:{
        type: Number,
        required: true,
        trim:true
    },
    iscm:{
        type: Number,
        required: true,
        trim:true
    },
    cesantias:{
        type: Number,
        required: true,
        trim:true
    },
    saludEmpleado:{
        type: Number,
        required: true,
        trim:true
    },
    saludEmpresa:{
        type: Number,
        required: true,
        trim:true
    },
    pensionEmpleado:{
        type: Number,
        required: true,
        trim:true
    },
    pensionEmpresa:{
        type: Number,
        required: true,
        trim:true
    },
    hed:{
        type: Number,
        required: true,
        trim:true
    },
    hen:{
        type: Number,
        required: true,
        trim:true
    },
},{
    versionKey: false,
    timestamps:true
})
export default model('Setting', settingSchema);