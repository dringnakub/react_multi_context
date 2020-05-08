import React, { createContext, useReducer } from "react"
import { postpostReducer } from '../reducer/postpostReducer';

const initialState = [{
    id: "2flkdfkp-1o23",
    title: "Hi This title",
    content: `Search for the keywords to learn more about each warning.
    To ignore, add // eslint-disable-next-line to the line before.`
}]

export const PostPostContext = createContext();
export const PostPostProvider = ({ children }) => {
    const [postpostState, postpostDispatch] = useReducer(
        postpostReducer,
        initialState
    );

    const addPost = (payload) => {
        postpostDispatch({ type: "ADD_POST", payload })
    }

    return (
        <PostPostContext.Provider value={{ postpostState, addPost }}>
            {children}
        </PostPostContext.Provider>
    )
}
