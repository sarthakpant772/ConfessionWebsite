// import { Route, Routes } from 'react-router-dom';
import './App.css'
// import Layout from './component/Layout';
import AddPostForm from './features/posts/AddPostForm'
import PostList from './features/posts/PostList'
import { store } from './app/store'
import { fetchPosts } from './features/posts/postsSlice'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { breakpoints } from '@mui/system'
import SinglePost from './features/posts/SinglePost'

store.dispatch(fetchPosts())

const custom_theme = createTheme({
  palette: {
    primary: {
      main: '#F5C6AA',
    },
    secondary: {
      main: '#F8E2CF',
    },
  },
  typography: {
    h5: {
      fontSize: '1rem',
    },
    // [breakpoints.up('xs')]: {
    //   fontSize: '1.5rem',
    // },
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={custom_theme}>
        <Router>
          <Box sx={{ backgroundColor: '#FDF6F0' }}>
            <Header />
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="form" element={<AddPostForm />} />
              <Route path="/post/:id" element={<SinglePost />} />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
