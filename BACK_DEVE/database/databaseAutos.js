import mongoose from "mongoose";
//const url='mongodb://localhost:27017/DeveSolutions';
const url='mongodb+srv://evasco23:M0ng0v4@cluster0.eqlvbew.mongodb.net/DeveSolutions?retryWrites=true&w=majority';

mongoose.connect(url);

const db = mongoose.connection;
db.on('open',()=>{
    console.log("¡La conexion con mongo fue exitosa!");
});
db.on('err', ()=>{
    console.log("La conexion falló");
});

export default db;