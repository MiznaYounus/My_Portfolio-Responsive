import React from 'react'
interface propstType{
    title: string;
}

const Heding: React.FC<propstType> = ({title}) => {
  return (
    <div className='text-center text-4xl pb-8'>
     <p className='border-b-4 inline-block pb-2'> {title}</p> 
    </div>
  )
}

export default Heding
