import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Worker() {

  // useEffect(() =>{
  //   axios.get("http://localhost:5000/");
  // }, [])

  return (
    <div className='flex flex-col items-center justify-center h-min-screen bg-blue p-4'>
     <h1>Hello dearie</h1>
    </div>
  )
}

export default Worker
