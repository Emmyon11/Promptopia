import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: [true, 'Email already exists!'],
  },
  username: {
    type: String,
    required: [true, 'username is required!'],
    match: [
      /^(?=.{8,40}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Username invalid, it should contain 8-40 alphanumeric letters and be unique!',
    ],
  },
  image: {
    type: String,
  },
});

export default models.User || model('User', userSchema);
