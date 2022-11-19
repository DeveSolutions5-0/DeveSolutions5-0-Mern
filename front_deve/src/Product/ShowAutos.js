import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//vamos a usar el endpoint creado en back routes

const URI = "http://localhost:3001/autos/";

//creamos la funcion de los componentes que vamos a implemetar,
//todo el codigo debe quedar dentro de esta funcion

const CompShowProducts = () => {
  // usamos hooks
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  //crear funcion get products para que valla al back
  const getProducts = async () => {
    //el res es la respuesta que espera el front del back
    const res = await axios.get(URI);
    //vamos a mostrar los datos que trae dicha respuesta
    setProducts(res.data);
  };

  // enseguida hacemos el delete
  const deleteProduct = async(id)=>{
    axios.delete(`${URI}${id}`);
    //una vez borre el registro que me vuelva a mostrar los que quedan
    getProducts();
  }

  //retornemos la respuesta al html utilizando jsx
  return (
    <div className="container p-3 border bg-light">
      <div className="row justify-content-center gap-3 my-2">
      <h1> Lista de vehículos disponibles - <i class="fa-solid fa-list-check"></i></h1>
        <div className="col-7 border rounded-3 p-3 my-auto border bg-white">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Marca</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.marca}</td>
                  <td>{product.stock}</td>
                  <td>{product.precio}</td>
                  <td>
                    <Link to={`/edit/${product._id}`}className='btn btn-info'>Editar <i class="fa-solid fa-pen-to-square"></i></Link>
                    <button onClick={()=>deleteProduct(product._id)} className='btn btn-danger'>Borrar <i class="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col border rounded-3  p-3">
        <div className="col border rounded-3 p-3 bg-white" >
        <h1><i class="fa-sharp fa-solid fa-car-side"></i></h1>
        <h3>Crear nuevo auto </h3>
        <Link to ="/create" className= "btn btn-primary mt-2 mt-4">Ingresar Vehículo <i class="fa-solid fa-plus"></i></Link> 
        <p>Haga click en el boton para ingresar un nuevo producto,
         luego ingrese los datos en la ventana a continuacion</p>

        </div>

        </div>
      </div>
    </div>
  );
};


export default CompShowProducts;