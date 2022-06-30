import express from 'express'
import { createPost, getPosts, likePost } from '../controllers/posts.js';

const router =express.Router();

router.post('/',createPost);
router.get('/',getPosts);
router.patch('/:id/likePost',likePost);

export default router;
