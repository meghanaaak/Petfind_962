import React from 'react'
import Logo from './components/Logo'
import Background from './components/Background'

const Login = () => {
  return (
    <div className='flex flex-col items-center h-screen overflow-hidden'>
        <Logo/>
        <div className='relative h-full mt-8'>
        <Background/>
        <form action="" className='absolute -mt-20 left-1/2 transform -translate-x-1/2'>
        <div className="relative z-10 flex flex-col items-center w-96 bg-white bg-opacity-80 p-6 rounded-md shadow-lg">
                    <h2 className="text-lg font-bold text-gray-800 text-center mb-4">Login</h2>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm text-gray-800 mb-2">Email</label>
                        <input
                            id="email"
                            type="text"
                            className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm text-gray-800 mb-2">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none"
                        />
                    </div>

                    <div>
                        <button className="w-full text-sm text-white bg-sky-500 hover:bg-sky-600 px-3 py-2 rounded">Login</button>
                    </div>
                </div>
                </form>
         </div>
    </div>
  )
}

export default Login