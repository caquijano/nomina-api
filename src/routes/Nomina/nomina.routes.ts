import { Router } from "express";
import { auth, verifySignup } from "../../middleware";
import * as nominaController from './nominas.controller'

const router = Router();

router.get('/nominas', nominaController.getNominas);

router.get('/nominas/:id', nominaController.getNomina);

router.post('/nominas/:token', auth.verifyToken, nominaController.createNomina);

router.delete('/nominas/:id/:token', auth.verifyToken, nominaController.deleteNominas);


export default router