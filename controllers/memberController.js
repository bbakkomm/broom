import Member from '../models/MemberModel.js';
import { StatusCodes } from 'http-status-codes';

// GET ALL
export const getAllMembers = async (req,res) => {
  const members = await Member.find({});
  res.status(StatusCodes.OK).json({members});
};

// GET SINGLE
export const getMember = async (req,res) => {
  const member = await Member.findById(req.params);
  if (!member) {
    return res.status(404).json({msg:`no member with id ${id}`});
  }
  
  res.status(StatusCodes.OK).json({member});
};

// CREATE
export const createMember = async (req,res) => {
  const member = await Member.create(req.body);
  res.status(StatusCodes.CREATED).json({member});
};

// UPDATE
export const updateMember = async (req,res) => {
  const { id } = req.params;
  const patchMember = await Member.findByIdAndUpdate(id, req.body,{
    new:true
  });
  if (!patchMember) {
    return res.status(404).json({msg:`no member with id ${id}`});
  }

  res.status(StatusCodes.OK).json({ msg: 'member modified', patchMember });
};

// DELETE
export const deleteMember = async (req,res) => {
  const { id } = req.params;
  const removeMember = await Member.findByIdAndDelete(id);
  if (!removeMember) {
    return res.status(404).json({msg:`no member with id ${id}`});
  }

  res.status(StatusCodes.OK).json({ msg: 'member deleted', job: removeMember });
};