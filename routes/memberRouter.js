import { Router } from "express";
const router = Router();

import {
  getAllMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember,
} from "../controllers/memberController.js";

router.route('/').get(getAllMembers).post(createMember);
router.route('/:id').get(getMember).patch(updateMember).delete(deleteMember);

export default router;