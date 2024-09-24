import mongoose from "mongoose";

const studySchema = new mongoose.Schema({
  title: String,
  thumb: {
    type: String,
    default: '111.jpg',
  },
  date: {
    type: String,
    default: '2024.08.14',
  },
  time: String,
  place: String,
  price: String,
  maximumPerson: Number,
  skillTag: {
    type: Array,
    item: [],
  },
  complete: Boolean,
  introduce: String,
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  }
}, { timestamps: true });

export default mongoose.model('Study', studySchema);