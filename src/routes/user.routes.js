import { Router } from 'express';
import UserController from '../controllers/userController.js';

const router = Router();

router.post('/register', UserController.createUser);
router.post('/login', UserController.loginUser);

export default router;