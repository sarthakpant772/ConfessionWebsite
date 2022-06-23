import express from 'express'
import postMessage from '../models/postConfession.js'

const router = express.Router()

export const createPost = async (res, req) => {
  const { title, message } = req.body
  const newPostMessgae = new postMessage({ title, message })
  try {
    await newPostMessgae.save()
    res.status(201).json(newPostMessgae)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const getPosts=async(req,res)=>{
    try{

        const PostMessages = await postMessage.find();
        console.log(postMessage);
        res.status(200).json(PostMessages);

    }catch (error){
        res.status(404).json({message:error.message});
    }
};

export default router
