import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Movie from './Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
const Row =  ({title ,fetchURL, rowId})=> {
    const [movies , setmovie] =useState([])

    
    useEffect(()=> { 
        axios.get(fetchURL).then((response)=>{
            setmovie(response.data.results)
        })

    },[fetchURL])

    const slideLeft = ()=> 
    {
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = ()=> 
    {
        var slider = document.getElementById('slider'+ rowId)
        slider.scrollLeft = slider.scrollLeft + 500
    }
   
  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4 '>{title}</h2>
        <div className='relative flex items-center group '>
            <MdChevronLeft onClick={slideLeft} className='bg-white absolute left-0 z-10 rounded-full  opacity-50 hover:opacity-100 cursor-pointer group-hover:block hidden  'size={40}/>
            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide ' id={'slider'+rowId}>
                {movies.map((item,id)=> (
                  <Movie key={id} item={item}/>
                ))}

            </div>
            <MdChevronRight onClick={slideRight} className='bg-white absolute right-0 z-10 rounded-full  opacity-50 hover:opacity-100 cursor-pointer group-hover:block hidden  'size={40}/>

        </div>
    </div>
  )
}

export default Row