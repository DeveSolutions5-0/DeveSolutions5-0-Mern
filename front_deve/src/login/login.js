import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//se crea el componente

const CompLogin = ()=>{
    //hooks
    const [usuario, setUsuario]= useState('');
    const navigate = useNavigate();

    //metodo redireccionamiento
    const elegir = (e)=>{
        e.preventDefault();
        if (usuario == 'admin'){
            navigate('/empleados')
        }
        else{
            navigate('/view')
        }

    };

    return(
        <div className="container">
           <div className="row justify-content-center my-5">
            <div className="col border rounded-3 my-auto mx-auto">
                <form className="form-control-lg" onSubmit={elegir}>
                <button type="submit" className="btn btn-outline-primary mx-3 p-5" onClick={(e)=>setUsuario('admin')}>Administrador</button>
                <button type="submit" className="btn btn-outline-primary mx-3 p-5" onClick={(e)=>setUsuario('client')}>Cliente</button>
                </form>

            </div>
           </div>
        </div>
    )
};

export default CompLogin;