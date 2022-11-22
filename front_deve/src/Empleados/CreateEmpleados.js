import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = "http://localhost:3001/empleados/";


//creamos componente para nuevos empleados

const CompCreateEmpleados = () => {
  //Sec onfiguran los Hooks

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [cargo, setCargo] = useState("");
  //configuramos el navegador
  const navigate = useNavigate();

  //se crea procedimiento para guardar un nuevo empleado

  const nuevo = async (e) => {
    e.preventDefault();
    await axios.post(URI, { nombre: nombre, correo: correo, cargo: cargo });
    navigate("/empleados");
  };

  return (
    <div>
      <h1>Crear Empleados</h1>
      <form onSubmit={nuevo} className="p-3 border bg-light">
        <div className="row mb-2 justify-content-center">
          <label className="col-sm-2 col-form-label col-form-label-sm">
            Nombre
          </label>
          <div className="col-sm-4">
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="form-control form-control-sm"
            />
          </div>
        </div>
        <div className="row mb-2 justify-content-center">
          <label className="col-sm-2 col-form-label col-form-label-sm">
            Correo
          </label>
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
            <input
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              type="text"
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
        <Link to="/empleados">
          <button type="button" className="btn btn-success">Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default CompCreateEmpleados;
