
 function Workers() {


   return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 p-4">
  <div className="w-[75%] bg-white rounded p-4 shadow-lg">
    <button className="bg-green-400 rounded p-2 my-4" >Add +</button>
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left pb-2">Name</th>
          <th className="text-left pb-2">Email</th>
          <th className="text-left pb-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-b-4">Name</td>
          <td className="border-b-4">Name</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</div>

   )
 }

 export default Workers

