import express from 'express'
import mongoose from 'mongoose'
import postMessage from '../models/postConfession.js'

// const router = express.Router()

export const createPost = async (req, res) => {
  const post = req.body
  const newPostMessgae = new postMessage(post)
  try {
    await newPostMessgae.save()
    res.status(201).json(newPostMessgae)
  } catch (error) {
    res.status(409).json({ message: error.message })
    console.log(error)
  }
}

export const getPosts = async (req, res) => {
  try {
    const PostMessages = await postMessage.find()
    console.log(postMessage)
    res.status(200).json(PostMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const likePost = async (req, res) => {
  const { id } = req.params
  // console.log(id)
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post with id: ${id}')

  const post = await postMessage.findById(id)

  const updatedPost = await postMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true },
  )
  res.json(updatedPost)
}

// export default router
