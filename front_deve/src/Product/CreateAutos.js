import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = "http://localhost:3001/autos/";

//creamos componente para nuevos productos

const CompCreateProducts = () => {
  //Sec onfiguran los Hooks

  const [marca, setMarca] = useState("");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");
  //configuramos el navegador
  const navigate = useNavigate();

  //se crea procedimiento para guardar un nuevo auto

  const nuevo = async (e) => {
    e.preventDefault();
    await axios.post(URI, { marca: marca, stock: stock, precio: precio });
    navigate("/view");
  };

  return (
    <div>
      <h1>Crear Autos</h1>
      <form onSubmit={nuevo} className="p-3 border bg-light">
        <div className="row mb-2 justify-content-center">
          <label className="col-sm-2 col-form-label col-form-label-sm">
            Nombre
          </label>
          <div className="col-sm-4">
            <input
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              type="text"
              className="form-control form-control-sm"
            />
          </div>
        </div>
        <div className="row mb-2 justify-content-center">
          <label className="col-sm-2 col-form-label col-form-label-sm">
            Stock
          </label>
          <div className="col-sm-4">
            <textarea
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              type="number"
              className="form-control form-control-sm"
            />
          </div>
        </div>
        <div className="row mb-2 justify-content-center">
          <label className="col-sm-2 col-form-label col-form-label-sm">
            Precio
          </label>
          <div className="col-sm-4">
            <input
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              type="number"
              className="form-control form-control-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <button className="btn btn-primary px-3 py-3" type="submit">
            <i class="fa-solid fa-cloud"></i> Guardar
          </button>
        </div>
      </form>
    

      <div class="p-3" >
        <Link to="/view">
          <button type="button" className="btn btn-success">Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default CompCreateProducts;
