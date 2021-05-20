"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
(async () => {
    try {
        const db = await mongoose_1.default.connect(`mongodb+srv://${config_1.default.MONGO_HOST}/${config_1.default.MONGO_DATABASE}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('database is connected to: ', db.connection.name);
    }
    catch (error) {
    }
})();
