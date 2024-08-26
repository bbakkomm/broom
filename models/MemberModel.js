import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  company: String,
  postion: String,
  memberStatus: {
    type: String,
    enum: ['interview', 'declined', 'pending'],
    default: 'pending',
  },
  memberType: {
    type: String,
    enum: ['full-time', 'part-time', 'internship'],
    default: 'full-time',
  },
  memberLocation: {
    type: String,
    default: 'my city',
  },
}, {timestamps: true});

export default mongoose.model('Member', MemberSchema);