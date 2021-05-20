import User from "../routes/Users/User";
import Role from "../routes/Roles/Role";
import bcrypt from "bcryptjs";


export const createAdmin = async () => {
    try {
        const count = await User.findOne({ email: "admin@nomina.com" }) ;
        if (count) return;

        const role = await Role.findOne({ name: "admin" });
        const rolUser = [role?._id];
        const user = {
            name: "Admin",
            email: "admin@nomina.com",
            lastName: "Nomina",
            password:"1234567",
            city:"Bogota",
            address:"Norte de Bogota",
            roles: [rolUser],
            phone:"3004569856"}
        

        const userAdmin = new User({
            name: user.name,
            email: user.email,
            lastName: user.lastName,
            password: await bcrypt.hash(user.password, 12),
            city: user.city,
            address: user.address,
            roles: user.roles,
            phone: user.phone,
          });
          const savedUser = await userAdmin.save();
    } catch (error) {

    }
}