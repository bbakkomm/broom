import Study from "../models/StudyModel.js";
import { StatusCodes } from "http-status-codes";

// GET ALL study
export const getObjAllStudy = async (req, res) => {
  const studys = await Study.find({});
  res.status(StatusCodes.OK).json({ studys });
}

// GET USER ALL study
export const getAllStudy = async (req, res) => {
  const studys = await Study.find({createdBy:req.params.id});
  res.status(StatusCodes.OK).json({ studys });
}

// CREATE study
export const createStudy = async (req, res) => {
  req.body.createdBy = req.user.userId;
  req.body.member = [req.user.userId];
  req.body.thumb = req.file;
  req.body.thumb.path = req.body.thumb.path.replace(/client\\public\\/,'');

  const study = await Study.create(req.body);
  res.status(StatusCodes.CREATED).json({ study });
}

// GET SINGLE study
export const getStudy = async (req, res) => {
  const study = await Study.findOne({ _id: req.params.id});
  res.status(StatusCodes.OK).json({ study });
}

// GET ALL study like
export const getObjAllStudyLike = async (req, res) => {
  const studys = await Study.find({ like: req.params.id });
  res.status(StatusCodes.OK).json({ studys });
}

// GET ALL study member
export const getObjAllStudyParticipate = async (req, res) => {
  const studys = await Study.find({ member: req.params.id });
  res.status(StatusCodes.OK).json({ studys });
}

// UPDATE study
export const updateStudy = async (req, res) => {
  const updateStudy = await Study.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(StatusCodes.OK).json({ msg:'study edit', study: updateStudy });
}

// DELETE study
export const deleteStudy = async (req, res) => {
  const removeStudy = await Study.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'study delete', study: removeStudy});
}