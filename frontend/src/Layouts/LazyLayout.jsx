import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, getUser } from '../redux/Reducers/UserReducer'
import { useNavigate } from 'react-router-dom'

function LazyLayout() {
    const user = useSelector(state=> state.user.user)
    const authed = useSelector(state=> state.user.authed)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(()=>{
        console.log("helo")
        if(authed){
            if(!user){
                console.log("calle")
                dispatch(getUser())
            }
        }else{
            navigate('/login')
        }
    }, [user, authed])

  return (
    <div className='h-fit'>
        {
            !user && (
                <div className='flex justify-center items-center h-[450px]'>
                    <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                    >
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default LazyLayout