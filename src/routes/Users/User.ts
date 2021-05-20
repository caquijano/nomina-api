import mongoose, { Schema, model, Document } from "mongoose";

export interface UserInterface extends Document {
    name: string;
    lastName: string;
    email: string;
    city: string;
    address: string;
    photo?: string;
    phone: string;
    password: string;
    roles: string[];
    created_at: Date;
    updated_at: Date; 
  }
 
const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    lastName:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        
    },
    city:{
        type: String,
        required: true,
        trim: true,
    },
    address:{
        type: String,
        required: true,
        trim: true,
    },
    photo:{
        type: String,
        required: false,
        trim: true,
    },
    phone:{
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
    roles: [
        {
          type: Schema.Types.ObjectId,
          ref: "Role",
        },
      ],
},{
    versionKey: false,
    timestamps:true
})
export default mongoose.model('User', userSchema);