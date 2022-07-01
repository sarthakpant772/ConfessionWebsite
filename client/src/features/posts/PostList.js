import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from './PostCard'
import { getPostsError, getPostsStatus, selectAllPosts } from './postsSlice'

const PostList = () => {
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  let content
  if (postStatus === 'loading') {
    content = <p>Loading...</p>
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
    content = orderedPosts.map((post) => (
      <>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ justifyContent: 'space-between' }}
        >
          <PostCard key={post._id} post={post} />
        </Grid>
      </>
    ))
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>
  }

  // console.log(posts)
  return (
    <Box sx={{ margin: 10 }}>
      <Grid
        container
        spacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        columns={12}
        sx={{ marginTop: '10px' }}
      >
        {content}
      </Grid>
    </Box>
  )
}

export default PostList
