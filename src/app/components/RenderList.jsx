import React, { useState } from 'react'
import { List } from './List'

export const RenderList = ({list}) => {
    // let newList = list
    
    const [newList,setNewList]=useState(list)
    const handleClick = () => {
        // e.preventDefault()
        
        console.log(newList)
        return setNewList([])
    }
  return (
    <div>
        {
            newList.map((i) =>{
                return <List key={i.id} {...i} />
            })
        }
         
         <button  className='text-white block w-[100%] bg-[#f28ab2] mt-8 mr-auto mb-0 ml-auto capitalize text-xl pt-5 pb-5 outline outline-1 outline-[rgba(242,138,178,0.8)] cursor-pointer' onClick={handleClick} > Clear </button> 
         

        <button  className='text-white block w-[100%] bg-[#f28ab2] mt-8 mr-auto mb-0 ml-auto capitalize text-xl pt-5 pb-5 outline outline-1 outline-[rgba(242,138,178,0.8)] cursor-pointer' onClick={() => setNewList(list)} > Reset </button>
        
        {/* <Clear newList={newList}/> */}

    </div>
  )
}
