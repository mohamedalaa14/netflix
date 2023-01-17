import { arrayUnion ,doc , updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'


const Movie =({item})=> {
    const [like , setlike] = useState (false)
    const [saved,setSaved] = useState (false)
    const {user} =UserAuth()
    
    const movieID = doc (db , 'users' , `${user?.email}`)

    const saveShow =async ()=> {
      if (user?.email){
        setlike(!like);
        setSaved(true);
        await updateDoc(movieID, {savedShows:arrayUnion({
          id:item.id,
          title:item.title,
          img:item.backdrop_path,

        }),})
      }else {
        alert ('Please log in to save a movie')
      }
    }
  return (
    <div className='w-[160px] sm:w-[200] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative  m-2'>
    <img className='w-full h-auto block ' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title}/>
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100  text-white p-2'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex items-center justify-center text-center h-full '>{item?.title}</p>
        <p onClick={saveShow}>{like ?( <FaHeart className='absolute top-4 text-gray-300'/>)   : (<FaRegHeart className='absolute top-4 text-gray-300'/>)}</p>

    </div>
</div>
  )
}

export default Movie