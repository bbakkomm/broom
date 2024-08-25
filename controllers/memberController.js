// import MemberModel from '../models/MemberModel';
import { nanoid } from 'nanoid';

let members = [
  {id:nanoid(), company:'apple',position:'front-end'},
  {id:nanoid(), company:'google',position:'back-end'},
]

// GET ALL
export const getAllMembers = async (req,res) => {
  res.status(200).json({members});
};

// GET SINGLE
export const getMember = async (req,res) => {
  const { id } = req.params;
  const member = members.find((member) => member.id === id);
  if (!member) {
    // throw new Error('no member with that id');
    return res.status(404).json({msg:`no member with id ${id}`});
  }
  
  res.status(200).json({member});
};

// CREATE
export const createMember = async (req,res) => {
  const {company, position} = req.body;
  if (!company || !position) {
    return res.status(400).json({msg:'please provide company and postion'});
  }
  const id = nanoid(10);
  const member = { id, company, position };
  members.push(member);

  res.status(200).json({members});
};

// UPDATE
export const updateMember = async (req,res) => {
  const {company, position} = req.body;
  if (!company || !position) {
    return res.status(400).json({msg:'please provide company and postion'});
  }

  const { id } = req.params;
  const member = members.find((member) => member.id === id);
  if (!member) {
    return res.status(404).json({msg:`no member with id ${id}`});
  }
  
  member.company = company;
  member.position = position;

  res.status(200).json({ msg: 'member modified', member });
};

// DELETE
export const deleteMember = async (req,res) => {
  const { id } = req.params;
  const member = members.find((member) => member.id === id);
  if (!member) {
    return res.status(404).json({msg:`no member with id ${id}`});
  }
  const newMembers = members.filter((member) => member.id !== id);
  members = newMembers;
  
  res.status(200).json({ msg: 'member deleted', members });
};