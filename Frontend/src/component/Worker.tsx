import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Worker() {

  useEffect(() =>{
    axios.get("http://localhost:5000/");
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-min-sceen bg-blue p-4'>
     <div className='bg-white rounded'>
      <button className='bg-blue-500'>Add +</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          </tbody>     
         </table>
      </div> 
    </div>
  )
}

export default Worker
