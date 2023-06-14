import { createSlice } from "@reduxjs/toolkit";
import axios from "../../Api/Axios";

const initialState = {
    posts : null,
    errors : null,
    likes : null
}


export const PostReducer = createSlice({
    name: 'post', 
    initialState, 
    reducers: 
    {
        getData : (state, action)=>{
            state.posts = action.payload.posts
        },
        handlErrors : (state, action )=>{
            state.errors = action.payload
        }, 
        getLikes : (state, action )=>{
            state.likes = action.payload
        }
    }
})



export const fetchData = ()=>async(dispatch)=>{
    try{
        const response = await axios.get('api/posts')
        dispatch(getData(response.data))
    }catch(error){
        console.log(error)
    }
}


export const CreatePost = (data)=>async(dispatch)=>{
    try{
        await axios.post('api/posts' , data)
        dispatch(fetchData())
    }catch(error){
        dispatch(handlErrors(error.response.data.errors))
    }
}

export const getPostLikes = ()=>async(dispatch)=>{
    try{
        const response =await axios.get('api/likes')
        dispatch(getLikes(response.data.likes))
    }catch(error){
        throw new Error(error)
    }
}

export const likePost = (id) => async(dispatch)=>{
    // await csrf()
    try{
        await axios.post('api/likes', id)
        dispatch(getPostLikes())
    }catch(error){
        throw new Error(error)
    }
}


export const deslikePost = (id) => async(dispatch)=>{
    try{
        await axios.delete(`api/likes/${id}`)
        dispatch(getPostLikes())
    }catch(error){
        throw new Error(error)
    }
}
export const {getData, handlErrors, getLikes} = PostReducer.actions
export default PostReducer.reducer