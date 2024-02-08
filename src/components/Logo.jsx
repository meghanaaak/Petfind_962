import React from 'react'
import logo from  '../assets/logo.png'

const Logo = () => {
  return (
    <div className='space-y-9'>
         <a href='/' className='flex items-center space-x-3 bg-white md:px-14 py-4 mx-auto max-w-screen border-b fixed top-0 left-0 right-0 '>
            <img src={logo} alt="" className='w-10 items-center' /><span >Petfinder</span>
          </a>
    </div>
  )
}

export default Logo