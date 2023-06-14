import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getUsers} from '../../redux/Reducers/UserReducer'
import Header from '../Home/posts/header'
import {BsPersonFillAdd} from "react-icons/bs"
import { addNewFriend } from '../../redux/Reducers/FriendReducer'

function FriendsIndex() {
    const user = useSelector(state=> state.user.user)
    const users = useSelector(state=>state.user.users)?.filter(item=>user?.id !== item.id )
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!users){
            dispatch(getUsers())
        }
    },[users])

    const addFriend = (id)=>{
        const formData = new FormData();
        formData.append('userId2' ,id )
        dispatch(addNewFriend(formData))
        
    }
    return (
    <div className='mt-5 grid grid-cols-4 gap-8 px-5'>
        {
        users && 
            <div className="col-span-1 bg-gray-800 rounded-lg p-8">
                <h4 className="text-xl font-medium text-center mb-3">
                    All Users 
                </h4>
                {
                    users?.map((user)=>(
                        <div key={user.id} className="grid grid-cols-5 my-7 ">
                            <div className='flex col-span-4 items-center'>
                                <Header user = {user} />
                            </div>
                            <div className="col-span-1 flex items-center justify-end">
                                <button>
                                    <BsPersonFillAdd className='w-6 h-6' onClick={()=>addFriend(user.id)}/>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
         }
        <div className="col-span-2 bg-gray-800 rounded-lg">

        </div>
        <div className="col-span-1 bg-gray-800 rounded-lg"></div>
    </div>
  )
}

export default FriendsIndex