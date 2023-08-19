import { Schema, model, models } from 'mongoose';

const promptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'prompt is require'],
  },

  tag: {
    type: String,
    required: [true, 'tag is require'],
  },
});

export default models.Prompt || model('Prompt', promptSchema);
