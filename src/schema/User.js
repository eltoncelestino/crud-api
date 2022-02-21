import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: false
  },
},
  {
    timestamp: true
});

export default mongoose.model("User", UserSchema);