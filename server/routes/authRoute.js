import { Router } from 'express';
import { getMe, register } from '../controllers/authController.js';

const router = new Router();

router.post('/register', register);

router.get('/me', getMe);


export default router;