import  { useState } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { CreatePost } from '../../../redux/Reducers/PostReducer';

function AddPost() {

  const [post, setPost ] = useState()
  const [image, setImage] = useState()
  const errors = useSelector(state=> state.post.errors)
  const dispatch = useDispatch()

  
  const handlChange = (e)=>{
    setPost((data)=>(
      {
        ...data,
        [e.target.name] : e.target.value
      }
    ))
    console.log(post)
  }

  const handlImage = (e)=>{
    setImage(e.target.files[0])
  }
  const handlSubmit = (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('title' , post?.title || '')
    formData.append('description' , post?.description || '')
    formData.append('picture', image || '')
    dispatch(CreatePost(formData))

  }
  return (
    <>
        <div className="px-4 flex justify-end">
          <Popup className='bg-gray-800 p-0' trigger=
                {<button className="flex items-center"> 
                  <TbPhotoPlus className="text-gray-700 mr-1 dark:text-gray-100 w-7 h-7"/> <span>Add Post </span>
                </button>}
                modal nested>
                {
                    close => (
                        <div className='modal bg-white dark:bg-gray-800 py-4 px-10 rounded-lg m-0'>
                          <form action="" onSubmit={handlSubmit}>
                            <div className=' bg-gray-800 text-gray-700 dark:text-gray-200'>
                              <div className="my-2 text-center font-medium">
                                <h4>Add New Post</h4>
                              </div>
                                <div>
                                  <label htmlFor="">Picture</label>
                                  <input type="file" name='picture' onChange={handlImage} className="w-full rounded-md bg-gray-300 dark:bg-gray-700 border border-gray-400 px-2 py-1 focus:border-[#2792FF] focus:outline-none " />
                                  <span className="text-red-400">
                                    {errors?.picture}
                                  </span>
                                </div>

                                <div className='mt-5'>
                                  <label htmlFor="">Title</label>
                                  <input type="text" name='title' onChange={handlChange} className="w-full rounded-md bg-gray-300 dark:bg-gray-700 border border-gray-400 px-2 py-1 focus:border-[#2792FF] focus:outline-none " />
                                  <span className="text-red-400">
                                    {errors?.title}
                                  </span>
                                </div>

                                <div className="mt-5">
                                  <label htmlFor="">Description</label>
                                  <textarea name="description" onChange={handlChange} className="w-full rounded-md bg-gray-300 dark:bg-gray-700 border border-gray-400 px-2 py-1 focus:border-[#2792FF] focus:outline-none "  id="" cols="30" rows="10"></textarea>
                                  <span className="text-red-400">
                                    {errors?.description}
                                  </span>
                                </div>

                              
                              </div>
                              <div className='mt-4'>
                                  <button className='bg-red-500 rounded-lg text-white px-3 py-1 font-medium' onClick=
                                      {() => close()}>
                                        Cancel
                                  </button>
                                  <input type="submit" className='bg-blue-500 hover:bg-blue-400 rounded-lg text-white px-3 py-1 font-medium ml-3 cursor-pointer' value="Create"/>
                              </div>
                            </form>
                        </div>
                    )
                }
            </Popup>
        </div>
    </>
  )
}

export default AddPost