import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function FriendsIndex() {
    const users = useSelector(state=>state.user.users)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!users){
            dispatch()
        }
    },[users])
    return (
    <div>

    </div>
  )
}

export default FriendsIndex