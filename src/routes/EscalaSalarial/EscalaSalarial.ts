import mongoose, { Schema, model, Document } from "mongoose";

export interface EscalaSalarialInterface extends Document {
    cargo: string;
    nivel: string;
    salario: number;
    createAt?: string | Date;
    updateAt?: string | Date;
  }
 
const escalaSalarialSchema = new Schema({
    cargo:{
        type: String,
        required: true,
        trim:true
    },
    nivel:{
        type: String,
        required: true,
        trim:true
    },
    salario:{
        type: Number,
        required: true,
        trim:true
    },
   
},{
    versionKey: false,
    timestamps:true
})
export default model('EscalaSalarial', escalaSalarialSchema);