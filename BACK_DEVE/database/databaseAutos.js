import mongoose from "mongoose";
const url='mongodb://localhost:27017/DeveSolutions';

mongoose.connect(url);

const db = mongoose.connection;
db.on('open',()=>{
    console.log("¡La conexion con mongo fue exitosa!");
});
db.on('err', ()=>{
    console.log("La conexion falló");
});

export default db;