import { Router } from "express";
import { auth, verifySignup } from "../../middleware";
import * as empleadoController from './empleados.controller'

const router = Router();

router.get('/empleados', empleadoController.getEmpleados);

router.get('/empleados/:id', empleadoController.getEmpleado);

router.post('/empleados/:token', auth.verifyToken, empleadoController.createEmpleado);

router.delete('/empleados/:id/:token', auth.verifyToken, empleadoController.deleteEmpleados);


export default router