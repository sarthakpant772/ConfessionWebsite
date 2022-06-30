import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  id: String,
  title: {
    type: String,
    default: 'this is title',
  },
  confess: {
    type: String,
    default: 'this is confess',
  },
  comment: [{ body: String, date: Date }],
  likeCount: {
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
