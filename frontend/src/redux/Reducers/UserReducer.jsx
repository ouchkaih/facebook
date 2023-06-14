
import {createSlice} from "@reduxjs/toolkit"
import axios from '../../Api/Axios'
import { csrf } from "../../Api/Csrf"
const initialState = {
    user : null,
    errors : [],
    users : null,
    authed : true,
}


export const UserReducer = createSlice(
    {
        name:'user', 
        initialState,
        reducers:{
            getData : (state, action)=>{
                state.user = action.payload
            },
            getErrors : (state, action)=>{
                state.errors = action.payload
            },
            listUsers : (state, action)=>{
                state.users = action.payload
            },
            setAuthed : (state, action)=>{
                state.authed = action.payload
                console.log(action.payload)
            }
        }
   }
)


export const getUser = ()=>async(dispatch)=>{
    await csrf()
    try{
        const response = await axios.get('api/user');
        dispatch(getData(response.data))
        dispatch(setAuthed(true))
    }catch(error){
        dispatch(setAuthed(false))
    }
}

export const Login = (data)=>async(dispatch)=>{
    await csrf()
    try{
        await axios.post('/login' , data);
        dispatch(getUser())
    }catch(errors){
        dispatch(getErrors(errors.response.data.errors))
    }    
}

export const Register = (data)=>async(dispatch)=>{ 
    await csrf()
    try{
        await axios.post('/register' , data);
        dispatch(getUser())
        alert('registred succesfully')
    }catch(errors){
        dispatch(getErrors(errors.response.data.errors))
    }    
}

export const Logout = ()=>async(dispatch)=>{
    dispatch(getData(null))
    await csrf()
    try{
        await axios.post('/logout');
    }catch(errors){
        console.log(errors)
    }
}


export const getUsers = ()=>async(dispatch)=>{
    await csrf()
    try{
       const response =  await axios.get('/api/users')
        dispatch(listUsers(response.data.users))
    }catch(error){
        throw new Error(error)
    }
}

export const {getData, getErrors, listUsers, setAuthed} = UserReducer.actions
export default UserReducer.reducer