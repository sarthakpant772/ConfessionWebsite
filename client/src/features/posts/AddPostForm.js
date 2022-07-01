import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { addNewPost } from '../posts/postsSlice'

const AddPostForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [confess, setConfess] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onConfessChanged = (e) => setConfess(e.target.value)
  // const onAuthorChanged = e => setUserId(e.target.value)

  const canSave = [title, confess].every(Boolean) && addRequestStatus === 'idle'

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending...')
        dispatch(addNewPost({ title, confess })).unwrap()
        setTitle('')
        setConfess('')
        navigate('/')
      } catch (err) {
        console.error('faileed to save the post', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  return (
    <Box sx={{ height: '90vh', display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={24}
        sx={{
          margin: 'auto',
          width: { xs: '70%', sm: '40%' },
          height: { xs: '60%' },
        }}
      >
        <Box
          sx={{
            margin: 'auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '70%',
          }}
        >
          <Typography
            variant="h2"
            component="p"
            sx={{
              fontWeight: 700,
              mb: 7,
              fontSize: { xs: 25, sm: 35 },
            }}
          >
            Add New Confession
          </Typography>
          <Box>
            <Box sx={{ height: 130 }}>
              <Typography variant="h4" sx={{ mb: 1, fontSize: 30 }}>
                Confession Title
              </Typography>
              <TextField
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                sx={{ width: '100%' }}
                onChange={onTitleChanged}
              />
            </Box>
            <Box>
              <Typography variant="h4" sx={{ mb: 1, fontSize: 30 }}>
                Confession main
              </Typography>
              <TextField
                type="text"
                id="postContent"
                name="postContent"
                value={confess}
                sx={{ width: '100%', height: 70 }}
                onChange={onConfessChanged}
              />
            </Box>
          </Box>
          <Button
            variant="contained"
            type="button"
            onClick={onSavePostClicked}
            // disabled={!canSave}
          >
            Save Post
          </Button>
        </Box>
      </Paper>
    </Box>

    // <section>
    //   <h2>Add a New Post</h2>
    //   <form>
    //     <label htmlFor="postTitle">Post Title:</label>
    //     <input
    //       type="text"
    //       id="postTitle"
    //       name="postTitle"
    //       value={title}
    //       onChange={onTitleChanged}
    //     />
    //     <label htmlFor="postAuthor">Author:</label>

    //     <label htmlFor="postContent">Content:</label>
    //     <textarea
    //       id="postContent"
    //       name="postContent"
    //       value={confess}
    //       onChange={onConfessChanged}
    //     />
    //     <button
    //       type="button"
    //       onClick={onSavePostClicked}
    //       // disabled={!canSave}
    //     >
    //       Save Post
    //     </button>
    //   </form>
    // </section>
  )
}
export default AddPostForm
