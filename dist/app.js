"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const users_routes_1 = __importDefault(require("./routes/Users/users.routes"));
const initialSetup_1 = require("./libs/initialSetup");
const createAdmin_1 = require("./libs/createAdmin");
const settings_routes_1 = __importDefault(require("./routes/Settings/settings.routes"));
const escalaSalarial_routes_1 = __importDefault(require("./routes/EscalaSalarial/escalaSalarial.routes"));
const empleado_routes_1 = __importDefault(require("./routes/Empleados/empleado.routes"));
const app = express_1.default();
initialSetup_1.createRoles();
createAdmin_1.createAdmin();
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(users_routes_1.default, settings_routes_1.default, escalaSalarial_routes_1.default, empleado_routes_1.default);
// this folders for this application will be used to store public file images
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
