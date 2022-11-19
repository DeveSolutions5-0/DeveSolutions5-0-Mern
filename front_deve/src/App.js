import logo from './logoa.png';
import './App.css';

import CompShowProducts from './Product/ShowAutos';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<CompShowProducts/>}></Route>;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
