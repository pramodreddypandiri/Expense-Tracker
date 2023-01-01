import React from "react";
import Overview from './overview';
import Expense from './expense';
 
 function Home() {
   return (
    <div>
        <div>This is Home route</div>
        <div className='flex flex-row justify-between max-w-6xl mx-auto h-auto'>
            <Expense/>
            <Overview/> 
        </div>
        
    </div>
     
   )
 }
 
 export default Home