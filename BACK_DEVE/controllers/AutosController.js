import AutosModel from "../models/AutosModel.js";
//metodos para el crud

//mostrar todos los productos: cada producto esta guardado en un documento
export const getAllProduct = async(req, res)=>{
    try{
        const products = await AutosModel.find();
        res.status(200).json(products);

    }catch(err){
        res.json({message: err.message});
    }
};

//mostrar un solo producto
export const getProduct = async(req, res)=>{
    try{
        const id = req.params.id;
        const product = await AutosModel.findById({_id:id}).then((product)=>{
            res.status(200).json(product);
        })
    }catch(err){
        res.json({message: err.message});
    }   
}; 

//crear un nuevo producto

export const createProduct = async(req, res)=>{
    try{
        await AutosModel.create(req.body);
        res.status(200).json({"message":"¡Auto creado con exito!"});

    }catch(err){
        res.json({message: err.message});
    }
};

//Actualizar un producto
export const updateProduct = async(req, res)=>{
    try{
        const id = req.params.id;
        await AutosModel.updateOne({_id:id}, req.body).then(res =>{
            console.log(res);
        })
        res.status(200).json({"message":"¡Auto actualizado con exito!"});
    }catch{
        res.json({message: err.message});
    }
};

//Eliminar un producto
export const deleteProduct = async(req, res)=>{
    try{
        const id = req.params.id;
        await AutosModel.deleteOne({_id:id}).then(res=>{console.log(res)})
        res.status(200).json({"message":"¡Auto eliminado con exito!"});    
    }catch(err){
        res.json({message: err.message});
    }
};
