import { createSlice } from "@reduxjs/toolkit";
import axios from "../../Api/Axios";


const initialState = {
    friends : null
}

export const FriendReducer = createSlice({
    name: 'friends', 
    initialState, 
    reducers:{
        getData : (state, action)=>{
            state.friends = action.payload
        }
    }
})


export const getFriends = ()=> async(dispatch)=>{
    try{
        const response = await axios.get('api/friends')
        dispatch(getData(response.data.friends))
    }catch(error){
        throw new Error(error)
    }
}
export const addNewFriend =(data)=>async(dispatch)=>{
    try{
        await axios.post('api/friends', data)
        dispatch(getData())
    }catch(error){
        throw new Error(error)
    }
}

export const {getData} = FriendReducer.actions
export default FriendReducer.reducer