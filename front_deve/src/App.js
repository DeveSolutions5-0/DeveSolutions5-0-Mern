
import './App.css';

import CompShowProducts from './Product/ShowAutos';
import CompCreateProducts from './Product/CreateAutos';
import CompEditProducts from './Product/EditAutos';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CompCreateEmpleados from './Empleados/CreateEmpleados';
import CompShowEmpleados from './Empleados/ShowEmpleados';
import CompEditEmpleados from './Empleados/EditEmpleados';
import Menu from './Componentes/Menu';
import CompLogin from './login/login';
import CompShowStore from './store/ShowStore';
import CompShowBuy from './store/ShowBuy';


function App() {
  return (
    <div className="App">    

      <div>
      <Menu/>
      </div>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/view' element={<CompShowProducts/>}></Route>;
          <Route path='/create' element={<CompCreateProducts/>}></Route>;
          <Route path='/edit/:id' element={<CompEditProducts/>}></Route>;
          <Route path='/empleados/create' element={<CompCreateEmpleados/>}></Route>;
          <Route path='/empleados' element={<CompShowEmpleados/>}></Route>;
          <Route path='/empleados/edit/:id' element={<CompEditEmpleados/>}></Route>;
          <Route path='/' element={<CompLogin/>}></Route>;
          <Route path='/store' element={<CompShowStore/>}/>
          <Route path='/buy' element={<CompShowBuy/>}/>
          

        </Routes>
      </BrowserRouter>
      </div>      
    </div>
  );
}

export default App;
