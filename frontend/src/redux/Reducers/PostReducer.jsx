import { createSlice } from "@reduxjs/toolkit";
import axios from "../../Api/Axios";

const initialState = {
    posts : null,
    errors : null
}


export const PostReducer = createSlice({
    name: 'post', 
    initialState, 
    reducers: 
    {
        getData : (state, action)=>{
            state.posts = action.payload
        },
        handlErrors : (state, action )=>{
            state.errors = action.payload
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

export const {getData, handlErrors} = PostReducer.actions
export default PostReducer.reducer