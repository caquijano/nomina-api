import express, { Router } from "express";
import * as rolesController from './roles.controller'

const router = Router();

router.get('/roles/:id', rolesController.getRol);

router.get('/roles', rolesController.getRoles);
export default router