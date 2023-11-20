import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Income from "./pages/Income/Income";
import Expense from "./pages/Expense/Expense";
import Settings from "./pages/Settings/Settings";
import Report from "./pages/Report/Report";

function App() {
  return (
    <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Expense />} />
              <Route path='/income' element={<Income />} />
              <Route path='/report' element={<Report />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;
