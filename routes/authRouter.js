import { Router } from 'express';
const router = Router();

import { 
    login, register, logout, 
    uidSearch, passwordSearch 
} from '../controllers/authController.js';
import { 
    validateRegisterInput, validateLoginInput, 
    validateUidInput, validatePasswordInput
} from '../middleware/validationMiddleware.js';


router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.get('/logout', logout);

router.post('/userid', validateUidInput, uidSearch);
router.post('/userpw', validatePasswordInput, passwordSearch);

export default router;
