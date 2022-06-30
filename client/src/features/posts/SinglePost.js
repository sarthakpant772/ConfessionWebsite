import { Box, Container, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { reactionAdded, selectPostById } from './postsSlice'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
const SinglePost = () => {
  const dispatch = useDispatch()
  const id = useParams()
  // console.log(id.id)
  const post = useSelector((state) => selectPostById(state, id.id))
  // console.log(post)
  return (
    <Box sx={{ height: '90vh', display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={24}
        sx={{
          margin: 'auto',
          width: { xs: '40%' },
          height: { xs: '60%' },
        }}
      >
        <Container
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h2" sx={{ height: '20%' }}>
            {post.title}
          </Typography>
          <Typography variant="p" sx={{ height: '65%' }}>
            {post.confess}
          </Typography>
          <Box
            sx={{
              fontSize: 25,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height:'15%'
            }}
          >
            <IconButton
              sx={{ width: 40, color: 'black' }}
              onClick={() => dispatch(reactionAdded({ postId: post._id }))}
            >
              <ThumbUpIcon />
            </IconButton>
            {post.likeCount}
          </Box>
        </Container>
      </Paper>
    </Box>
  )
}

export default SinglePost
