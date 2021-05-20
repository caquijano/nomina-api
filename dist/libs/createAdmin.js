"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin = void 0;
const User_1 = __importDefault(require("../routes/Users/User"));
const Role_1 = __importDefault(require("../routes/Roles/Role"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createAdmin = async () => {
    try {
        const count = await User_1.default.findOne({ email: "admin@nomina.com" });
        if (count)
            return;
        const role = await Role_1.default.findOne({ name: "admin" });
        const rolUser = [role?._id];
        const user = {
            name: "Admin",
            email: "admin@nomina.com",
            lastName: "Nomina",
            password: "1234567",
            city: "Bogota",
            address: "Norte de Bogota",
            roles: [rolUser],
            phone: "3004569856"
        };
        const userAdmin = new User_1.default({
            name: user.name,
            email: user.email,
            lastName: user.lastName,
            password: await bcryptjs_1.default.hash(user.password, 12),
            city: user.city,
            address: user.address,
            roles: user.roles,
            phone: user.phone,
        });
        const savedUser = await userAdmin.save();
    }
    catch (error) {
    }
};
exports.createAdmin = createAdmin;
