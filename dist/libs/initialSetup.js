"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoles = void 0;
const Role_1 = __importDefault(require("../routes/Roles/Role"));
const createRoles = async () => {
    try {
        const count = await Role_1.default.estimatedDocumentCount();
        if (count > 0)
            return;
        const values = await Promise.all([
            new Role_1.default({ name: 'user' }).save(),
            new Role_1.default({ name: 'moderator' }).save(),
            new Role_1.default({ name: 'admin' }).save(),
        ]);
    }
    catch (error) {
    }
};
exports.createRoles = createRoles;
