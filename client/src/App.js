// import { Route, Routes } from 'react-router-dom';
import './App.css'
// import Layout from './component/Layout';
import AddPostForm from './features/posts/AddPostForm'
import PostList from './features/posts/PostList'
import {store} from './app/store'
import { fetchPosts } from './features/posts/postsSlice'

store.dispatch(fetchPosts());

function App() {
  return (
    <>
      <AddPostForm />
      <PostList/>
    </>
  )
}

export default App
