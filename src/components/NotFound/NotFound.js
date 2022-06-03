import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='w-full h-full text-center flex flex-col gap-2'>
        
        <h1 className='text-primary-dark dark:text-primary-light font-bold text-2xl'>NOT FOUND 404 </h1>
        <Link className="text-xs md:text-sm text-primary-400" to='/'>Home</Link>
        <Link className="text-xs md:text-sm text-primary-400" to='/post'>My Project</Link>
     
</div>
  )
}

export default NotFound