import EmpleadosModel from "../models/EmpleadosModel.js";
//metodos para el crud

//mostrar todos los empleados: cada empleado esta guardado en un documento
export const getAllEmpleados = async(req, res)=>{
    try{
        const empleados = await EmpleadosModel.find();
        res.status(200).json(empleados);

    }catch(err){
        res.json({message: err.message});
    }
};

//mostrar un solo empleado
export const getEmpleado = async(req, res)=>{
    try{
        const id = req.params.id;
        const empleado = await EmpleadosModel.findById({_id:id}).then((empleado)=>{
            res.status(200).json(empleado);
        })
    }catch(err){
        res.json({message: err.message});
    }   
}; 

//crear un nuevo empleado

export const createEmpleado = async(req, res)=>{
    try{
        await EmpleadosModel.create(req.body);
        res.status(200).json({"message":"¡Empleado creado con exito!"});

    }catch(err){
        res.json({message: err.message});
    }
};

//Actualizar un Empleado
export const updateEmpleado = async(req, res)=>{
    try{
        const id = req.params.id;
        await EmpleadosModel.updateOne({_id:id}, req.body).then(res =>{
            console.log(res);
        })
        res.status(200).json({"message":"¡Empleado actualizado con exito!"});
    }catch{
        res.json({message: err.message});
    }
};

//Eliminar un Empleado
export const deleteEmpleado = async(req, res)=>{
    try{
        const id = req.params.id;
        await EmpleadosModel.deleteOne({_id:id}).then(res=>{console.log(res)})
        res.status(200).json({"message":"¡Empleado eliminado con exito!"});    
    }catch(err){
        res.json({message: err.message});
    }
};