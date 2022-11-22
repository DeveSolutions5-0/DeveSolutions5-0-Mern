import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { u } from "../module/urlModule.js";

const URI = u;


//creamos el componente de edicion

const CompEditProducts = () => {
  //configurar hooks

  const [marca, setMarca] = useState("");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");

  //configuramos el navegador
  const navigate = useNavigate();

  //como necesitamos el id usamos el params que viene de la palabra parametros
  const { id } = useParams();

  //procedimiento

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, { marca: marca, stock: stock, precio: precio });
    navigate("/view");
  };

  //aqui se busca el producto con el id esto se ejecuta antes del procedimiento de actualizar
  useEffect(() => {
    getProductById();
  }, [])

  const getProductById = async () => {
    const res = await axios.get(URI + id);
    setMarca(res.data.marca);
    setStock(res.data.stock);
    setPrecio(res.data.precio);
  };

  return (
    <div>
      <h1>Editar Autos</h1>
      <form onSubmit={update}>
        <div className="row mb-2 justify-content-center">
          <label className="col-sm-2 col-form-label-sm">Marca</label>
            <div className="col-sm-4">
            <textarea
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              type="text"
              className="form-control form-control-sm"
            />
            </div>
            <div className="row mb-2 justify-content-center">
              <label className="col-sm-2 col-form-label-sm"> Stock </label>
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
                <textarea
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  type="number"
                  className="form-control form-control-sm"
                />
              </div>
            </div>
            <div className="mt-4">
              <button className="btn btn-info px-3" type="submit">
                Actualizar
              </button>
            </div>
          </div>
       
      </form>
    </div>
  );
};

export default CompEditProducts;
