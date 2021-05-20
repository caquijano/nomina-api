import mongoose, { Schema, model, Document } from "mongoose";

export interface HExtraInterface extends Document {
  idEmpleado: string;
  nombreEmpleado: string;
  hed: number;
  hen: number;
  valor: number;
  fechaNovedad: Date;
  created_at: Date;
  updated_at: Date;
}

const HExtraSchema = new Schema(
  {
    idEmpleado: {
      type: String,
      required: true,
      trim: true,
    },
    nombreEmpleado: {
      type: String,
      required: true,
      trim: true,
    },
    hed: {
      type: Number,
      required: false,
      trim: true,
    },
    hen: {
      type: Number,
      required: false,
      trim: true,
    },
    valor: {
      type: Number,
      required: true,
      trim: true,
    },
    fechaNovedad: {
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
export default mongoose.model("HExtra", HExtraSchema);
