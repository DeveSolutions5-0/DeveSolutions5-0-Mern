import express from 'express';
import {createProduct, deleteProduct, getAllProduct, getProduct, updateProduct} from '../controllers/AutosController.js';


const router = express.Router();

//enrutamientos
//para mostrar todos los productos
router.get('/', getAllProduct);
//mostrar un solo producto buscado por id
router.get('/:id', getProduct);
//crear un producto
router.post('/', createProduct);
//actualizar un producto
router.put('/:id', updateProduct);
//borrar un producto
router.delete('/:id', deleteProduct);



export default router;