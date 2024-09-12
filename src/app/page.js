'use client'
import { useState } from 'react';
import data from './components/data.js'
import { RenderList } from './components/RenderList.jsx';

export default function Home() {
  const [list,setList] = useState(data)

  return (
    <div className='bg-white w-[90vw] mt-[5rem] mb-[5rem] max-w-[600px] rounded pt-6 pb-6 pr-8 pl-8 '>
   <h1 className=' block mb-[2rem] font-normal leading-none tracking-tighter text-4xl'> {list.length} birthdays today</h1>
    <RenderList 
      list={list}
    />
    </div>
  
  )
}
