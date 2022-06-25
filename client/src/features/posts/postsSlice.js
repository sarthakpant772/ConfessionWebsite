import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'
import { sub } from 'date-fns'

const POST_URL = 'http://localhost:5000/posts'

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POST_URL)
  // console.log(response)
  return response.data
})

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (initialPost) => {
    const response = await axios.post(POST_URL, initialPost)
    return response.data
  },
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload)
      },
      prepare(title, confess, comment) {
        return {
          payload: {
            id: nanoid().toISOString(),
            title,
            confess,
            comment: {
              body: '',
              data: new Date().toISOString(),
            },
            createdAt: new Date().toISOString(),
            reaction: {
              likeCount: 0,
              report: 0,
            },
          },
        }
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'Loading...'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Adding date and reactions
        let min = 1
        const loadedPosts = action.payload.map((post) => {
          post.createdAt = sub(new Date(), { minutes: min++ }).toISOString()
          post.likeCount = 0
          return post
        })
        console.log(loadedPosts)
        // Add any fetched posts to the array
        state.posts = state.posts.concat(loadedPosts)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.createdAt = new Date().toISOString()
        // action.payload.likeCount = 0,
        state.posts.push(action.payload)
      })
  },
})

export const selectAllPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error
export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId)

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
