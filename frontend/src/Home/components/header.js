import React from 'react'

function Header() {
  return (
    <div className=' p-4 max-w-6xl mx-auto h-auto'>
        <div className='header flex flex-row justify-between'>
            <div className='applogo'>
                 <div className='text-3xl font-bold text-blue-500'>Expense Tracker</div>
            </div>
            <div className='flex gap-10'>
                <button className='manage bg-blue-500 px-3 py-2 text-white rounded-lg font-semibold'>Manage</button>
                <button className='insights bg-blue-500 px-3 py-2 text-white rounded-lg font-semibold'>Insights</button>
            </div>
        </div>
    </div>
  )
}

export default Header