import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  confess: String,
  comment: {
    type: String,
  },
  likeCont: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

var postMessage = mongoose.model('postMessage', postSchema)
export default postMessage
