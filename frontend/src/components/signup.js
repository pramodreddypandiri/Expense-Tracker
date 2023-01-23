import React from 'react'

const Signup = () => {
  return (
    <form onSubmit={() => {}} className='flex flex-col gap-4 w-[300px]'>
      <input className='p-2 mobile' value=''  name='mobile' type='tel' pattern='[0-9]{10}'/>
      <input className='p-2 password' value='' name='password'/>
      <button type='submit' className='bg-blue-500 px-3 py-2 text-white rounded-lg font-semibold'>Sign Up</button>
    </form>
  )
}

export default Signup