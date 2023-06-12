import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../redux/Reducers/UserReducer"
import { Link, useNavigate } from "react-router-dom"
import {TbPhotoPlus} from "react-icons/tb"
import Header from "./posts/header"
import AddPost from "./posts/AddPost"

function Home() {
  const user = useSelector(state=> state.user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      dispatch(getUser())
    }else if(user == "Unauthenticated."){
      navigate('/login')
    }
  },[user])

  return (
    user ? (
      <div>
        <div className="grid grid-cols-5 gap-2 pt-2">
          <div className="col-span-1 bg-white dark:bg-gray-800">
            hello
          </div>
          <div className="col-span-3 flex justify-center bg-white dark:bg-gray-800">
            <div className="w-full">
              <Header user={user}/>
              <AddPost/>
            </div>
          </div>
          <div className="col-span-1 bg-white dark:bg-gray-800">
            friends
          </div>
        </div>
      </div>
    ):(
      <div>
        loading....
      </div>
    )
  )
}

export default Home