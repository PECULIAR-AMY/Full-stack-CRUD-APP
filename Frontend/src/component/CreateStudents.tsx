import React from 'react';

function CreateStudents() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white  px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <form>
          <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Add Student</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateStudents;
