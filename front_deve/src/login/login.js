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
            navigate('/view')
        }
        else{
            navigate('/store')
        }

    };

    return(
        
        <div className="container">

            <div className="row justify-content-center my-5 ">
                <div className="col border rounded-3 my-auto mx-auto">
                <h2 class="text-success">Mintic 2022 - Grupos 15 - 16 - Desarrollo Web</h2>
                <h4 class="text-success">Edwin Fernando Vasco - DeveSolutions5.0</h4>
                </div>
            </div>  
            <div className="row justify-content-center my-5 bg-primary text-white">
                <div className="col border rounded-3 my-auto mx-auto">
                <h4>Haga click en su rol a continuación para iniciar sesión</h4>
                </div>
            </div>  
        
            <div className="row justify-content-center my-5">
                <div className="col border rounded-3 my-auto mx-auto">
                    <form className="form-control-lg" onSubmit={elegir}>
                        <button type="submit" className="btn btn-outline-primary mx-3 p-5" onClick={(e)=>setUsuario('admin')} ><i className="fa-solid fa-hammer fa-xl"></i> Administrador</button>
                        <button type="submit" className="btn btn-outline-warning mx-3 p-5" onClick={(e)=>setUsuario('client')}><i className="fa-solid fa-user fa-xl"></i> Cliente</button>
                    </form>
                </div>
            </div>            
        </div>
    )
};

export default CompLogin;