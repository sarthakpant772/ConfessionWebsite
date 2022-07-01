import { Box, Card, IconButton, Typography } from '@mui/material'
import React from 'react'
import CardContent from '@mui/material/CardContent'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'


import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'
import { useNavigate } from 'react-router-dom'


// const useStyle = makeStyles(
//   theme({
//     textExample: {
//       fontSize: '4rem',
//       color: 'red',
//     },
//   }),
// )

const PostCard = ({ post }) => {
  const navigate = useNavigate()
  const onClickHandler = (postId) => {
    // console.log(postId)
    navigate(`/post/${postId}`)
  }

  const dispatch = useDispatch()
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline>
    <Card
      onClick={() => onClickHandler(post._id)}
      sx={{ minWidth: 275, backgroundColor: '#F5C6AA', cursor: 'pointer' }}
    >
      <CardContent
        sx={{
          height: { xs: 350 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          color="text.secondary"
          variant="h3"
          sx={{ fontSize: { xs: 60 } }}
        >
          {post.title.substring(0, 50)}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ height: 150, fontSize: { xs: 20 } }}
          // className={classes.textExample}
        >
          {post.confess.substring(0, 200)}...
        </Typography>
        <Box
          sx={{
            fontSize: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
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
      </CardContent>
    </Card>
    //   </CssBaseline>
    // </ThemeProvider>
  )
}

export default PostCard
