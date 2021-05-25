import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import userRoutes from './routes/Users/users.routes'
import { createRoles } from './libs/initialSetup';
import { createAdmin } from './libs/createAdmin';
import SettingRoutes from './routes/Settings/settings.routes'
import EscalaSalarialRoutes from './routes/EscalaSalarial/escalaSalarial.routes'
import EmpleadoRoutes from "./routes/Empleados/empleado.routes";
import HExtrasRoutes from "./routes/HExtras/hextra.routes"
import NominaRoutes from "./routes/Nomina/nomina.routes";
const app =  express()
createRoles();
createAdmin();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:false}));
app.use(userRoutes, SettingRoutes,EscalaSalarialRoutes, EmpleadoRoutes, HExtrasRoutes, NominaRoutes)

// this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;