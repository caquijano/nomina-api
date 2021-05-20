import { Router } from "express";
import { auth, verifySignup } from "../../middleware";
import * as hextraController from './hextras.controller'

const router = Router();

router.get('/hextras', hextraController.getHExtras);

router.get('/hextras/:id', hextraController.getHExtra);

router.post('/hextras/:token', auth.verifyToken, hextraController.createHExtra);

router.delete('/hextras/:id/:token', auth.verifyToken, hextraController.deleteHExtras);


export default router