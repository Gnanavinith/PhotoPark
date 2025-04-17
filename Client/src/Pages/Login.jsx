import React, { useState } from 'react'

const Login = () => {
  const[currentState,setCurrentState]=useState("Sign Up")

  const onSubmitHandler=async (event)=>{
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className=' flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>
{currentState}

        </p>
        
       </div>
       {currentState === "Login" ? " " : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Enter Your Name' /> }
      
       <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Enter Your Email' />
       <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Enter Your Password' />
       <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Password?</p>
{
  currentState === "Login" ? <p className='cursor-pointer font-medium' onClick={()=>setCurrentState('Sign Up')}>Create account</p>:<p className='cursor-pointer font-medium' onClick={()=>setCurrentState('Login')}>Login Here</p>
}
       </div>

       <button className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>
        {currentState ==='Login' ? 'Sign In ' : 'Sign Up'}
       </button>
    </form>
  )
}

export default Login
