import { Schema, model } from 'mongoose';
const sch = new Schema({
  task: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  }
})
export default model('todo', sch);