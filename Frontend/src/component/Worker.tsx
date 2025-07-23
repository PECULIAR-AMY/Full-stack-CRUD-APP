import { useState, useEffect } from 'react';
import axios from 'axios';

interface WorkerProp {
  ID: number;
  Name: string;
  email: string;
}

function Workers() {
  const [workers, setWorkers] = useState<WorkerProp[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/")
      .then(res => {
        console.log('Fetched workers:', res.data[0]);
        setWorkers(res.data[0]);
      })
      .catch(err => {
        console.error('Error fetching workers:', err);
        setWorkers([]);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 p-4">
      <div className="w-[75%] bg-white rounded p-4 shadow-lg">
        <button className="bg-green-400 rounded p-2 my-4">Add +</button>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left pb-2">Name</th>
              <th className="text-left pb-2">Email</th>
              <th className="text-left pb-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((data) => (
              <tr key={data.ID}>
                <td>{data.Name}</td>
                <td>{data.email}</td>
                <td>
                  <button className="text-blue-500 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workers;
