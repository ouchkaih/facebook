import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import {Register} from '../../redux/Reducers/UserReducer'


function RegisterForm() {

  const [user, setUser] = useState()
  const errors = useSelector(state=> state.user.errors)
  const dispatch = useDispatch()
  const handlChange = (e)=>{
    setUser(
      (oldData)=>(
        { 
          ...oldData,
          [e.target.name] : e.target.value
        }
      )
    )
  }

  const handlSubmit = (e)=>{
    e.preventDefault()
    console.log(user)
    const formData = new FormData()
    formData.append('firstName' , user?.firstName || '')
    formData.append('lastName' , user?.lastName || '')
    formData.append('email' , user?.email || '')
    formData.append('password' , user?.password || '')
    formData.append('password_confirmation' , user?.password_confirmation || '')
    dispatch(Register(formData))
  }
  return (
    <div className="flex items-center h-full py-10" >
      <div className="w-full flex justify-center items-center">
        <form className="mx-auto rounded-lg  border border-gray-400 px-10 py-5 " onSubmit={handlSubmit}> 
          <div className="flex justify-center mb-10">
            <h4 className="text-2xl font-medium">Register</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <label htmlFor="">First Name</label>
              <input type="firstName" placeholder="john" onChange={handlChange}  name="firstName" className="w-full mt-2 px-2 dark:bg-gray-700 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-[#2792FF]"  id="firstName" />
              <span className="text-red-400">
                {
                  errors?.firstName
                }
              </span>
            </div>


            <div className="">
              <label htmlFor="">Last Name </label>
              <input type="lastName" onChange={handlChange}  name="lastName" className="w-full mt-2 px-2 dark:bg-gray-700 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-[#2792FF]"  id="lastName" />
              <span className="text-red-400">
                {
                  errors?.lastName
                }
              </span>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="">Email </label>
            <input type="email" onChange={handlChange}  name="email" className="w-full mt-2 px-2 dark:bg-gray-700 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-[#2792FF]"  id="email" />
            <span className="text-red-400">
                {
                  errors?.email
                }
              </span>
          </div>

          <div className="mt-6">
            <label htmlFor="">Password</label>
            <input type="password" onChange={handlChange}  name="password" className="w-full mt-2 px-2 dark:bg-gray-700 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-[#2792FF]"  id="password" />
            <span className="text-red-400">
                {
                  errors?.password
                }
              </span>
          </div>

          <div className="mt-6">
            <label htmlFor="">Password Confirmation</label>
            <input type="password" onChange={handlChange}  name="password_confirmation" className="w-full mt-2 px-2 dark:bg-gray-700 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-[#2792FF]"  id="password_confirmation" />
            <span className="text-red-400">
                {
                  errors?.password_confirmation
                }
              </span>
          </div>

          <div className="mt-6">
            <input type="submit" className="w-full py-2 hover:cursor-pointer rounded-lg bg-[#2792FF]" value="Create Account"/>
            <div className="mt-4 text-center">
              <span>Already have account?</span>
              <Link to="/login" className="text-[#2792FF]"> Login </Link>
            </div>
          </div>
        </form>
      </div>
    </div>  )
}

export default RegisterForm