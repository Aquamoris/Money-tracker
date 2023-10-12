import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CategoriesContainer from './components/Categories/CategoriesContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<CategoriesContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
