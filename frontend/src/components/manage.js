import React, { useState } from 'react'

function Manage() {
  const [cat, addCat] = useState('')
  
  const handleAddCategory = (e) => {
      e.preventDefault()
      console.log(cat);
  }
  return (
    <div>
        
        <div >
          <form className='flex flex-col gap-5 w-[300px]' onSubmit={handleAddCategory}>
          <div>Here you can Manage your categories</div>
          <input className='p-2  rounded-lg' value={cat} type="text" placeholder='Enter a new category' max="20" onChange={(e) => {addCat(e.target.value)}}></input>
          <button type='submit' className='bg-blue-500 px-3 py-2 text-white rounded-lg font-semibold'> Add Category </button> 
          </form>
        
        </div>

    </div>

  )
}

export default Manage