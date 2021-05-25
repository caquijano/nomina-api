import mongoose, { Schema, model, Document } from "mongoose";

export interface NominaInterface extends Document {
  nombre: string;
  cargo: string;
  salariobase: number;
  diasTrabajados: number;
  basicototal: number;
  auxtransporte: number;
  horasextras: number;
  totaldevengado: number;
  salud: number;
  pension: number;
  parafiscales: number;
  cargas: number;
  seguridad: number;
  fsp: number;
  totaldeducido: number;
  netopagar: number;
  fechaNomina: Date;
  created_at: Date;
  updated_at: Date;
}

const NominaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    cargo: {
      type: String,
      required: true,
      trim: true,
    },
salariobase: {
      type: Number,
      required: true,
      trim: true,
    },
    diasTrabajados: {
        type: Number,
        required: true,
        trim: true,
      },
      basicototal: {
        type: Number,
        required: true,
        trim: true,
      },
      auxtransporte: {
        type: Number,
        required: true,
        trim: true,
      },
      horasextras: {
        type: Number,
        required: true,
        trim: true,
      },
      totaldevengado: {
        type: Number,
        required: true,
        trim: true,
      },
      salud: {
        type: Number,
        required: true,
        trim: true,
      },
      pension: {
        type: Number,
        required: true,
        trim: true,
      },
      parafiscales: {
        type: Number,
        required: true,
        trim: true,
      },
      cargas: {
        type: Number,
        required: true,
        trim: true,
      },
      seguridad:{
        type: Number,
        required: true,
        trim: true,
      },
        fsp:{
        type: Number,
        required: true,
        trim: true,
      },
      totaldeducido:{
        type: Number,
        required: true,
        trim: true,
      },
      netopagar:{
        type: Number,
        required: true,
        trim: true,
      },
    fechaNomina: {
      type: Date,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default mongoose.model("Nomina", NominaSchema);
