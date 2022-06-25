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
      <PostCard key={post._id} post={post} />
    ))
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>
  }

  // console.log(posts)
  return (
    <section>
      <h1> all confession are</h1>
      {content}
    </section>
  )
}

export default PostList
