import express, { Router } from "express";
import { auth, verifySignup } from "../../middleware";
import * as userController from './users.controller'

const router = Router();

router.get('/users', userController.getUsers);

router.get('/users/:email/:password', userController.loginUser);

router.get('/users/:id', userController.getUser);

router.post('/users', verifySignup.checkDuplicateUsernameOrEmail, userController.createUser);

router.post('/send-email', userController.sendEmail);

router.delete('/users/:id/:token', auth.verifyToken,auth.isAdmin, userController.deleteUsers);

//router.put('/users/:id', auth.verifyToken ,auth.isAdmin , userController.updateUser);

export default router