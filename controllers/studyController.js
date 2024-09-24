import Study from "../models/StudyModel.js";
import { StatusCodes } from "http-status-codes";

// GET ALL study
export const getAllStudy = async (req, res) => {
  const studys = await Study.find({createdBy:req.user.userId});
  res.status(StatusCodes.OK).json({ studys });
}

// CREATE JOB
export const createStudy = async (req, res) => {
  // console.log(req.file);
  req.body.createdBy = req.user.userId;
  const study = await Study.create(req.body);
  res.status(StatusCodes.CREATED).json({ study, thumbFile: req.file });
}

// GET SINGLE JOB
export const getStudy = async (req, res) => {
  const study = await Study.findById(req.params.id);
  res.status(StatusCodes.OK).json({ study });
}

// UPDATE JOB
export const updateStudy = async (req, res) => {
  const updateStudy = await Study.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(StatusCodes.OK).json({ msg:'study edit', study: updateStudy });
}

// DELETE JOB
export const deleteStudy = async (req, res) => {
  const removeStudy = await Study.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'study delete', study: removeStudy});
}