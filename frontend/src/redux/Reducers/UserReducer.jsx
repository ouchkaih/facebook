
import {createSlice} from "@reduxjs/toolkit"
import axios from '../../Api/Axios'
const initialState = {
    user : null,
    errors : []
}
export const UserReducer = createSlice(
    {
        name:'user', 
        initialState,
        reducers:{
            getDate : (state, action)=>{
                state.user = action.payload
            },
            getErrors : (state, action)=>{
                state.errors = action.payload
            }
        }
   }
)


const getUser = ()=>async(dispatch)=>{
    const responce = await axios.get('/user');
    dispatch(getDate(responce.data.user))
}

const Login = (data)=>async(dispatch)=>{
    try{
        await axios.post('/login' , data);
        getUser()
    }catch(errors){
        dispatch(getErrors(errors.data.errors))
    }    
}

const Register = (data)=>async(dispatch)=>{
    try{
        await axios.post('/register' , data);
       getUser()
    }catch(errors){
        dispatch(getErrors(errors.data.errors))
    }    
}

const logout = ()=>async()=>{
    try{
        await axios.post('/logout');
    }catch(errors){
        console.log(errors)
    }
}

export const {getDate, getErrors} = UserReducer.actions
export default UserReducer.reducer