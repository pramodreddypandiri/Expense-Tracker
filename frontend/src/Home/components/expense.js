import React, { useState } from 'react'

function Expense() {
    const [amount, setAmount] = useState('')
    const [desc, setDesc] = useState('')
    const submitData = () => {
        console.log( "this is in expese");
        console.log(amount, desc);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("this is in handle submit");
        submitData()
        setAmount('')
        setDesc('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}  >
            <div className='flex flex-col w-[300px]'>
            <div>
                <h1 className='title text-2xl font-bold '>Enter an Expense</h1>
            </div>
            <div className='inputs flex flex-col gap-6 my-6'>
                <input className='p-2' value={amount} type="number" min="1" name= "amount" placeholder='Enter amont in INR' onChange={(event) =>{setAmount(event.target.value)}}></input>
                <input className='p-2' value={desc} type="text"  name= "description" placeholder='Enter Description' onChange={(event) =>{setDesc(event.target.value)}}></input>
                <select className='p-2'>
                    <option> Select a Category </option>
                    <option value="medicine">Medicine </option>
                    <option value="investment" >Investment </option>
                    <option value="grocery">Grocery</option>
                </select>
                <button type='submit' className='bg-blue-500 px-3 py-2 text-white rounded-lg font-semibold'> Log Expense </button>
            </div>
            </div>
            
        </form>
    </div>
  )
}

export default Expense