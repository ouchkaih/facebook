import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser, getUsers } from "../../redux/Reducers/UserReducer"
import { Link, useNavigate } from "react-router-dom"
import Header from "./posts/header"
import AddPost from "./posts/AddPost"
import { fetchData, getPostLikes } from "../../redux/Reducers/PostReducer"
import Post from "./posts/Post"


function Home() {
  const user = useSelector(state=> state.user.user)
  const users = useSelector(state=>state.user.users)
  const posts = useSelector(state=> state.post.posts)
  const likes = useSelector(state=> state.post.likes)
  const authed = useSelector(state=> state.user.authed)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(authed){
      if(!user ){
        dispatch(getUser())
      }else{
        if(!users){
          dispatch(getUsers())        
        }
      }
    }else{
      navigate('/login')
    }
  },[user, users, authed])
  
  

  // get like Data
  useEffect(()=>{
    if(!likes ){
      dispatch(getPostLikes())
    }
  }, [likes])


  useEffect(()=>{
    if(!posts ){
      dispatch(fetchData())
    }
  },[posts, user])

  
  return (
     user? (
      <div>
        <div className="grid grid-cols-4 gap-10 pt-2">
          <div className="col-span-1">
            hello
          </div>
          <div className="col-span-2 pt-5 px-6 flex justify-center ">
            <div className="w-full">
              <div className="bg-white grid grid-cols-2 dark:bg-gray-800 rounded-lg p-3">
                <div>
                  <Header user={user}/> 
                </div>
                <div className="flex justify-end">
                  <AddPost/>  
                </div>
              </div>
                {
                  (posts && likes) && posts.map((post)=>(
                    <div  key={post.id} className="bg-white dark:bg-gray-800 rounded-lg p-7 mt-10 ">
                      <Post postData={post} likes={likes} user={user} users={users}/>
                    </div>

                  ))
                }
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