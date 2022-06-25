import React from 'react'

const PostCard = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.confess.substring(0, 75)}...</p>
      <p>{post.comment.body}</p>
    </article>
  )
}

export default PostCard
