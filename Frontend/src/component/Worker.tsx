 import React from 'react'
 import { useEffect, useState } from 'react';
 import axios from 'axios';
 

 function Worker() {

 useEffect(() =>{
   axios.get("http://localhost:5000/");
 }, [])

   return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 p-4">
  <div className="w-[75%] bg-white rounded p-4 shadow-lg">
    <button className="btn btn-success mb-4" >Add +</button>

    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left pb-2">Name</th>
          <th className="text-left pb-2">Email</th>
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

