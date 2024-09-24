import { Router } from 'express';
const router = Router();

import { 
  getAllStudy, 
  createStudy, 
  getStudy, 
  updateStudy, 
  deleteStudy 
} from '../controllers/studyController.js';
import { validateStudyInput, validateIdParam } from '../middleware/validationMiddleware.js';
import upload from '../middleware/multerMiddleware.js';

router.route('/')
  .get(getAllStudy)
  .post(upload.single('thumb'), validateStudyInput, createStudy);

router.route('/:id')
  .get(validateIdParam, getStudy)
  .patch(validateStudyInput, validateIdParam, updateStudy)
  .delete(validateIdParam, deleteStudy);

export default router;