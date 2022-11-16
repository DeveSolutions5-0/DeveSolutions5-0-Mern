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
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Marca</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.marca}</td>
                  <td>{product.stock}</td>
                  <td>{product.precio}</td>
                  <td>
                    <Link to={`/edit/${product.id}`}className='btn btn-info'>Editar</Link>
                    <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger'>Borrar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default CompShowProducts;