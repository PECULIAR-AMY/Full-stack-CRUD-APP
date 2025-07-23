import { BrowserRouter, Route, Routes } from "react-router-dom";
import Worker from "./component/Worker";

function App() {
  return (
    <div className='App'> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Worker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
