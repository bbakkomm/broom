import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: String,
  password: String,
  name: String,
  email: String,
  thumb: {
    type: String,
    default: 'profile_01.png'
  },
  job: {
    type: String,
    enum: ['planner', 'designer', 'developer'],
  },
  skillTag: {
    type: Array,
    item: [],
  },
  like: {
    type: Number,
    default: 0,
  },
  study: {
    type: Number,
    default: 0,
  },
  complete: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

UserSchema.methods.toJSON = function() {
  let obj = this.toObject();
  delete obj.password;
  return obj;
}

export default mongoose.model('User', UserSchema);