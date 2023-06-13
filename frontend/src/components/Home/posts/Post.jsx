import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Header from "./header"
import { getUsers } from "../../../redux/Reducers/UserReducer"

function Post({postData}) {

  const users = useSelector(state=>state.user.users)
  const dispatch = useDispatch()
  const [seeMore , setSeeMore] = useState(false)
  useEffect(()=>{
    if(!users){
      dispatch(getUsers())
    }
  },[ users])
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
            
        </div>
    </div>
  )
}

export default Post