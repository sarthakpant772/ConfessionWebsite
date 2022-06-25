import { useState } from "react";
import { useDispatch } from "react-redux";

import { addNewPost } from "../posts/postsSlice";



const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [confess, setConfess] = useState('')
    const [addRequestStatus,setAddRequestStatus] = useState('idle')


    const onTitleChanged = e => setTitle(e.target.value)
    const onConfessChanged = e => setConfess(e.target.value)
    // const onAuthorChanged = e => setUserId(e.target.value)

    const canSave = [title,confess].every(Boolean) && addRequestStatus ==='idle';

    const onSavePostClicked= ()=>{
        if(canSave){
            try{
                setAddRequestStatus('pending...');
                dispatch(addNewPost({title,confess})).unwrap();
                setTitle('');
                setConfess('');
                // navigate('/');
            } catch(err){
                console.error('faileed to save the post',err)
            }finally{
                setAddRequestStatus('idle');
            }
        }
    }


    return (
         <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                {/* <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select> */}
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={confess}
                    onChange={onConfessChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    // disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm