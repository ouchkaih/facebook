import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../redux/Reducers/UserReducer"
import { Link, useNavigate } from "react-router-dom"
import {TbPhotoPlus} from "react-icons/tb"
import Header from "./posts/header"
import AddPost from "./posts/AddPost"
import { fetchData } from "../../redux/Reducers/PostReducer"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

function Home() {
  const user = useSelector(state=> state.user.user)
  const posts = useSelector(state=> state.post.posts)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      dispatch(getUser())
    }else if(user == "Unauthenticated."){
      navigate('/login')
    }
  },[user])


  useEffect(()=>{
    if(!posts){
      dispatch(fetchData())
    }
  },[])

  return (
    user ? (
      <div>
        <div className="grid grid-cols-5 gap-2 pt-2">
          <div className="col-span-1 bg-white dark:bg-gray-800">
            hello
          </div>
          <div className="col-span-3 pt-5 px-6 flex justify-center bg-white dark:bg-gray-800">
            <div className="w-full">
              <Header user={user}/>
              <AddPost/>
              <div>
                {
                  posts && posts.map((post)=>(
                    <div key={post.id} className="rounded-lg m-3">
                      <div className="rounded-lg w-full h-96 overflow-hidden bg-cover" >
                      <img src={`./images/posts/${post.picture}`} alt="" />
                      </div>
                      <div>
                        {
                          post.picture
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
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