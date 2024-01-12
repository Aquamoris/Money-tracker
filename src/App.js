import {Routes, Route, HashRouter} from 'react-router-dom';
import './App.css';
import Income from "./pages/Income/Income";
import Expense from "./pages/Expense/Expense";
import Report from "./pages/Report/Report";

function App() {
  return (
    <HashRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Expense />} />
              <Route path='/income' element={<Income />} />
              <Route path='/report' element={<Report />} />
            </Routes>
          </div>
    </HashRouter>
  );
}

export default App;
