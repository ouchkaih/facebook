import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {Login, getUser} from '../../redux/Reducers/UserReducer'
function LoginForm() {
  const [userData , setUserData ] = useState()
  const errors = useSelector(state=> state.user.errors)
  const user = useSelector(state=> state.user.user)
  const authed = useSelector(state=> state.user.authed)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlChange = (e)=>{
    setUserData(
      (oldData)=>(
        { 
          ...oldData,
          [e.target.name] : e.target.value
        }
      )
    )
  }
  

  useEffect(()=>{
    if(authed){
      if(user){
        navigate('/')
      }else if(!user){
        dispatch(getUser())
      }
    }
  }, [user])


  const handlSubmit = (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('email' , userData?.email || '')
    formData.append('password' , userData?.password || '')
    dispatch(Login(formData))
  }


  return (
    <div className="flex items-center h-full mt-16" >
      <div className="w-full flex justify-center items-center">
        <form className="mx-auto rounded-lg w-[500px] border border-gray-400 px-10 py-5 bg-white dark:bg-gray-800" onSubmit={handlSubmit}> 
          <div className="flex justify-center mb-4">
            <h4 className="text-2xl font-medium">Login</h4>
          </div>
          <div className="">
            <label htmlFor="">Email :</label>
            <input type="email" onChange={handlChange}  name="email" className="w-full mt-2 px-2 dark:bg-gray-700 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-[#2792FF]"  id="email" />
            <span className="text-red-400">
              {errors?.email}
            </span>
          </div>

          <div className="mt-6">
            <label htmlFor="">Password :</label>
            <input type="password" onChange={handlChange}  name="password" className="w-full mt-2 px-2 dark:bg-gray-700 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-[#2792FF]"  id="password" />
            <span className="text-red-400">
              {errors?.password}
            </span>
          </div>

          <div className="mt-6">
            <input type="submit" className="w-full cursor-pointer py-2 rounded-lg bg-[#2792FF] " value="Login"/>
            <div className="mt-4 text-center">
              <span>You don't have account?</span>
              <Link to="/register" className="text-[#2792FF]"> Register </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm