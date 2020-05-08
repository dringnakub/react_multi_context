import React, { useContext, useState } from 'react'
import { PostPostContext } from '../store/PostPostProvider'

export default function PostPost() {
    console.log(useContext(PostPostContext))
    const init = {title : "" , content : ""}
    const [statePost, setStatePost] = useState(init)
    const { addPost, postpostState } = useContext(PostPostContext);

    const addContentClick = () => {
        console.log("addContentClick start ", statePost);
        addPost(statePost);
        setStatePost(init)
    }

    const handleChange = (e) => {
        setStatePost({
            ...statePost,
            [e.target.id]: e.target.value
        })


    }
    return (
        <div>
            <h1>Post Post</h1>
            <label>title</label>
            <input type="text" id="title" value={statePost.title} onChange={(e) => handleChange(e)} />
            <label>content</label>
            <input type="text" id="content" value={statePost.content} onChange={(e) => handleChange(e)} />

            <button onClick={() => addContentClick()}>Add Content</button>
            {
                postpostState.map((p, index) =>
                    <ul key={p.id}>
                        <li>No.{index + 1}</li>
                        <li>{p.title}</li>
                        <li>{p.content}</li>
                    </ul>
                )
            }

        </div>
    )
}
