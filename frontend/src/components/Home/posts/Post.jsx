import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Header from "./header"
import { getUsers } from "../../../redux/Reducers/UserReducer"
import {BiLike, BiMessage} from 'react-icons/bi'
import { likePost } from "../../../redux/Reducers/PostReducer"

function Post({postData, likes, user, users}) {

  const dispatch = useDispatch()
  const [seeMore , setSeeMore] = useState(false)




  const addLike = (id)=>{
    let exist = likes?.filter ((item)=> item.postId === id && item.userId === user.id)[0]
    if(!exist){
        let formData = new FormData()
        formData.append('postId', id)
        dispatch(likePost(formData))
    }
  }
  return (
    <div className="rounded-lg m-3  justify-center">
        <div className="">
            {/* user Data  */}
            <div className="mb-3">
                {
                    <Header user={ users?.filter(u => u.id === postData.userId)[0]} date={postData.date}/> 
                }
            </div>
            <div className="my-3">
                {
                    postData.title
                }
            </div>
                {
                    postData?.description &&
                    ( 
                        <div>
                            <span className="opacity-80">
                                {postData?.description.length > 40 && !seeMore ?  postData?.description.slice(0, 40 ) + "..." : postData?.description}                       
                            </span>
                            <div className="text-end">
                                <button className="text-[#2792FF]" onClick={()=> setSeeMore(!seeMore)}>{seeMore ? "See Less" : "See More"}</button>
                            </div>
                        </div>
                    )
                }
            <div className="rounded-lg w-full h-[500px] overflow-hidden bg-cover bg-red-400 mt-3" style={{backgroundImage:`url(./images/posts/${postData.picture})`}} ></div>

            <div className="rounded-full bg-gray-900 px-3 py-5 grid grid-cols-2 mt-5">
                <div className="flex justify-center">
                    <button className="flex items-center gap-2 font-medium" onClick={()=>addLike(postData.id)}>
                      <BiLike className="w-6 h-6"/>{likes?.filter(item=> item.postId === postData.id).length > 0 && likes?.filter(item=> item.postId === postData.id).length}  Likes
                    </button>
                </div>
                <div className="flex justify-center">
                <button className="flex items-center gap-2 font-medium">
                      <BiMessage className="w-6 h-6"/>  Comments
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post