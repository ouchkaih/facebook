import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../redux/Reducers/UserReducer"
import { useNavigate } from "react-router-dom"

function Home() {
  const user = useSelector(state=> state.user.user)
  const [userData , setUserData] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      dispatch(getUser())
    }else if(user == "Unauthenticated."){
      navigate('/login')
    }else{
      setUserData(user)
    }
  },[user])

  return (
    user ? (
      <div>
        {user?.firstName}
      </div>
    ):(
      <div>
        loding
      </div>
    )
  )
}

export default Home