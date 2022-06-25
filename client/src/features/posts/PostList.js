import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts } from './postsSlice'

const PostList = () => {
  const dispathc = useDispatch();
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  useEffect(()=>{
    if(postStatus=== 'idle'){
      dispathc(fetchPosts());
    }
  },[postStatus,dispathc]);

  let content
  if (postStatus === 'loading') {
    content = <p>Loading...</p>
  } else if (postStatus === 'succeeded') {
    content = posts.map((post) => console.log(post))
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>
  }

  console.log(posts)
  return (
    <section>
      <h1> all confession are</h1>
      {content}
    </section>
  )
}

export default PostList
