import { Router } from 'express';
const router = Router();

import { 
  getObjAllStudy,
  getObjAllStudyParticipate,
  createStudy, 
  
  getStudy, 
  updateStudy, 
  deleteStudy, 

  getAllStudy, 
} from '../controllers/studyController.js';
import { validateStudyInput, validateIdParam } from '../middleware/validationMiddleware.js';
import upload from '../middleware/multerMiddleware.js';

router.route('/')
  .get(getObjAllStudy)
  .post(upload.single('thumb'), validateStudyInput, createStudy);
  
router.route('/:id')
  .get(getStudy)
  // .patch(validateStudyInput, validateIdParam, updateStudy)
  .patch(validateStudyInput, updateStudy)
  .delete(validateIdParam, deleteStudy);
  
router.route('/user/:id')
  .get(getAllStudy)

router.route('/member-all/:id')
  .get(getObjAllStudyParticipate)
export default router;