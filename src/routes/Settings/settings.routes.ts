import { Router } from "express";
import { auth, verifySignup } from "../../middleware";
import * as settingController from './settings.controller'

const router = Router();

router.get('/settings', settingController.getSettings);

router.get('/settings/:id', settingController.getSetting);

router.post('/settings/:token', auth.verifyToken, settingController.createSetting);

router.delete('/settings/:id/:token', auth.verifyToken, settingController.deleteSettings);


export default router