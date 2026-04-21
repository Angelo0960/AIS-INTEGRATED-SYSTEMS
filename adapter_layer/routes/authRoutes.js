import * as AuthController from '../controller/authController.js';
import express from 'express';


const authRoutes = express.Router();

authRoutes.post('/new', AuthController.registerStudent)

export default authRoutes;