
import {createSlice} from "@reduxjs/toolkit"
import axios from '../../Api/Axios'
const initialState = {
    user : null,
    errors : []
}

const csrf = () => axios.get('sanctum/csrf-cookie') 

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
            }
        }
   }
)


export const getUser = ()=>async(dispatch)=>{
    await csrf()
    try{
        const response = await axios.get('api/user');
        dispatch(getData(response.data))
        console.log(response.data)
    }catch(error){
        console.log()
        dispatch(getData(error.response.data.message))
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
       getUser()
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

export const {getData, getErrors} = UserReducer.actions
export default UserReducer.reducer