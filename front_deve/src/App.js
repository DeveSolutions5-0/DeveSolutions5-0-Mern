import logo from './logoa.png';
import './App.css';

import CompShowProducts from './Product/ShowAutos';
import CompCreateProducts from './Product/CreateAutos';
import CompEditProducts from './Product/EditAutos';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CompCreateEmpleados from './Empleados/CreateEmpleados';
import CompShowEmpleados from './Empleados/ShowEmpleados';
import CompEditEmpleados from './Empleados/EditEmpleados';


function App() {
  return (
    <div className="App">    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<CompShowProducts/>}></Route>;
          <Route path='/create' element={<CompCreateProducts/>}></Route>;
          <Route path='/edit/:id' element={<CompEditProducts/>}></Route>;
          <Route path='/empleados/create' element={<CompCreateEmpleados/>}></Route>;
          <Route path='/empleados' element={<CompShowEmpleados/>}></Route>;
          <Route path='/empleados/edit/:id' element={<CompEditEmpleados/>}></Route>;


        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
