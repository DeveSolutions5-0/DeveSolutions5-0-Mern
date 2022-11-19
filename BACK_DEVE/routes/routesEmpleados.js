import express from 'express';
import { createEmpleado, deleteEmpleado, getAllEmpleados, getEmpleado, updateEmpleado } from '../controllers/EmpleadosControler.js';

const routerEmpleados = express.Router();

//enrutamientos
//para mostrar todos los empleados
routerEmpleados.get('/', getAllEmpleados);
//mostrar un solo empleado buscado por id
routerEmpleados.get('/:id', getEmpleado);
//crear un empleado
routerEmpleados.post('/', createEmpleado);
//actualizar un empleado
routerEmpleados.put('/:id', updateEmpleado);
//borrar un empleado
routerEmpleados.delete('/:id', deleteEmpleado);


export default routerEmpleados;