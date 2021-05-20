import mongoose,{Schema, model, Document} from 'mongoose';

export const ROLES = ["user", "admin", "moderator"];
export interface UserInterface extends Document {
    name: string;
  }

const roleSchema  = new Schema(
    {
        name: String,
    },
    {

        versionKey: false,
    }
);
export default mongoose.model("Role", roleSchema)