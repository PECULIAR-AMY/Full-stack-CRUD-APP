import { BrowserRouter, Route, Routes } from "react-router-dom";
import Worker from "./component/Worker";
import CreateWorkers from "./component/CreateWorkers";
import UpdateWorkers from './component/UpdateWorkers'

function App() {
  return (
    <div className='App'> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Worker />} />
           <Route path="/create" element={<CreateWorkers />} />
               <Route path="/update:id" element={<UpdateWorkers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
