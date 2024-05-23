import mongoose from "mongoose";


const userschema = new mongoose.Schema({
  name: String,
  login: String,
  password: String
});

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
});

export const User = mongoose.model('Users', userschema);
export const Task = mongoose.model('Task', taskSchema);

