import React from 'react'
import Navbar from './Navbar'

const HeadingText = ({title, description}) => {
  return (
    <section className='px-4 py-24'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-center sm:text-3xl text-2xl font-bold mb-2'> {title} </h1>
            <h3 className='text-xs text-orange-500 tracking-widest font-medium mb-2'> {description} </h3>
            <div className='h-1 w-20 bg-orange-500 rounded'></div>
        </div>
    </section>
  )
}

export default HeadingText
