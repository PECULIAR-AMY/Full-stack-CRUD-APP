import { BrowserRouter, Route, Routes } from "react-router-dom";
import Worker from "./component/Worker";
import CreateStudents from "./component/CreateStudents";

function App() {
  return (
    <div className='App'> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Worker />} />
           <Route path="/create" element={<CreateStudents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
