import React from 'react'
import Image from 'next/image'

export const List = ({image, name,age}) => {
  return (
    <article className='grid   h-[100px] w-[250px]  object-cover grid-flow-col mb-4 m-0 p-0 items-center box-border'>
                <Image 
                className=' rounded-[50%] h-[75px] w-[75px] block object-cover overflow-clip '
                src={image}
                width={75}
                height={75}
                alt={name}
                />
                <div>
                <h4 className='block mb-[.5rem] font-semibold leading-none tracking-tighter text-2xl'>{name}</h4>
                <p className=' box-border m-0 p-0 text-[#64748b]'>{age} years</p>
               </div>
    </article>
  )
}
