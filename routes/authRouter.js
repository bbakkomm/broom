import { Router } from 'express';
const router = Router();

import { login, register, logout, uidSearch } from '../controllers/authController.js';
import { validateRegisterInput, validateLoginInput, validateEmailInput } from '../middleware/validationMiddleware.js';


router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.post('/userid', validateEmailInput, uidSearch);
router.get('/logout', logout);

export default router;
