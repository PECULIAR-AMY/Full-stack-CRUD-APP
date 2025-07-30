import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateWorkers() {

    const [name, setName ] = useState('')
    const [email, setEmail] = useState('')
     const { id} = useParams<{ id: string }>();
    const navigate =useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      axios.put("http://localhost:3000/update/" +id, { name,email})
      .then(res => {
        console.log(res);
        navigate('/')
      }).catch(err=>console.log(err));
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white  px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Update Workers</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Name of students</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Update Workers and make sure its cool 
          </button>
        </form>
      </div>
    </div>
  );
}
export default UpdateWorkers;
