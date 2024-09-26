import { Router } from 'express';
import { 
    getAllUsers,
    getUser,

    getApplicationStats, 
    getCurrentUser, 
    updateUser 
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import { authorizePermissions } from '../middleware/authMiddleware.js';
const router = Router();

router.get('/all-user', getAllUsers);
router.get('/single-user/:id', getUser);

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', [
    authorizePermissions('admin'), 
    getApplicationStats
]);


router.patch('/update-user', validateUpdateUserInput, updateUser);

export default router;
