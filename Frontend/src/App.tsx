import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Worker from "./component/Worker"

function App() {

  return (
    <div className='App'> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Worker />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
