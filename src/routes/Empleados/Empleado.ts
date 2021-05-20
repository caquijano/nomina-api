import mongoose, { Schema, model, Document } from "mongoose";

export interface EmpleadoInterface extends Document {
    nombre: string;
    apellidos: string;
    telefono: string;
    direccion: string;
    fechaNto: string | Date;
    idEscala: string;
    cargo: string;
    salario: number;
    fechaEntrada:string | Date; 
    cesantias?: number;
    vacaciones?:number;
    prima?:number;
    created_at: Date;
    updated_at: Date; 
  }
 
const EmpleadoSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        trim:true
    },
    apellidos:{
        type: String,
        required: true,
        trim:true
    },
    telefono:{
        type: String,
        required: true,
        trim:true
    },
    direccion:{
        type: String,
        required: true,
        trim:true
    },
    fechaNto:{
        type: Date,
        required: true,
        trim: true,
        
    },
    idEscala:{
        type: String,
        required: true,
        trim:true
    },
    cargo:{
        type: String,
        required: true,
        trim:true
    },
    salario:{
        type: Number,
        required: true,
        trim:true
    },
    fechaEntrada:{
        type: Date,
        required: true,
        trim: true,
        
    },
    cesantias:{
        type: Number,
        required: false,
        trim: true,
    },
    vacaciones:{
        type: Number,
        required: false,
        trim: true,
    },
    prima:{
        type: Number,
        required: false,
        trim: true,
    },
},{
    versionKey: false,
    timestamps:true
})
export default mongoose.model('Empleado', EmpleadoSchema);