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
  comment: [{body:String,date:Date}],
  reactions:{
    likeCount:Number,
    report:Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

var postMessage = mongoose.model('postMessage', postSchema)
export default postMessage
