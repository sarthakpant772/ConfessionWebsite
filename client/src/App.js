// import { Route, Routes } from 'react-router-dom';
import './App.css'
// import Layout from './component/Layout';
import AddPostForm from './features/posts/AddPostForm'
import PostList from './features/posts/PostList'

function App() {
  return (
    <>
      <AddPostForm />
      <PostList/>
    </>
  )
}

export default App
