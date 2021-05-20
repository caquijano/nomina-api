import { Router } from "express";
import { auth, verifySignup } from "../../middleware";
import * as escalaSalarialController from './escalaSalarial.controller'

const router = Router();

router.get('/escalasalarial', escalaSalarialController.getEscalaSalariales);

router.get('/escalasalarial/:id', escalaSalarialController.getEscalaSalarial);

router.post('/escalasalarial/:token', auth.verifyToken, escalaSalarialController.createEscalaSalarial);

router.delete('/escalasalarial/:id/:token', auth.verifyToken, escalaSalarialController.deleteEscalaSalarial);


export default router