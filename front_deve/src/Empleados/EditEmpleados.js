import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:3001/empleados/";

//creamos el componente de edicion

const CompEditEmpleados = () => {
  //configurar hooks

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [cargo, setCargo] = useState("");

  //configuramos el navegador
  const navigate = useNavigate();

  //como necesitamos el id usamos el params que viene de la palabra parametros
  const { id } = useParams();

  //procedimiento

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, { nombre: nombre, correo: correo, cargo: cargo });
    navigate("/empleados");
  };

  //aqui se busca el producto con el id esto se ejecuta antes del procedimiento de actualizar
  useEffect(() => {
    getEmpleadoById();
  }, [])

  const getEmpleadoById = async () => {
    const res = await axios.get(URI + id);
    setNombre(res.data.nombre);
    setCorreo(res.data.correo);
    setCargo(res.data.cargo);
  };


  return (
    <div>
      <h1>Editar Empleados</h1>
      <form onSubmit={update}>
        <div className="row mb-2 justify-content-center">
          <label className="col-sm-2 col-form-label-sm">Nombre</label>
            <div className="col-sm-4">
            <textarea
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="form-control form-control-sm"
            />
            </div>
            <div className="row mb-2 justify-content-center">
              <label className="col-sm-2 col-form-label-sm"> Correo </label>
              <div className="col-sm-4">
                <textarea
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  type="text"
                  className="form-control form-control-sm"
                />
              </div>
            </div>
            <div className="row mb-2 justify-content-center">
              <label className="col-sm-2 col-form-label col-form-label-sm">
                Cargo
              </label>
              <div className="col-sm-4">
                <textarea
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                  type="text"
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

export default CompEditEmpleados;
