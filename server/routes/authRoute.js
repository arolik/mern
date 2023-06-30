import { Router } from 'express';
import { getMe, login, register } from '../controllers/authController.js';
import { checkAuth } from '../utills/checkAuth.js';

const router = new Router();

//http://localhost:3002/api/auth/register
router.post('/register', register);

//http://localhost:3002/api/auth/login
router.post('/login', login)

//http://localhost:3002/api/auth/me
router.get('/me', checkAuth, getMe);


export default router;