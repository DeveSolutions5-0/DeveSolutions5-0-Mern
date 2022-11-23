import express from 'express';
import cors from 'cors';
import db from './database/databaseAutos.js';
import router from './routes/routes.js';
import routerEmpleados from './routes/routesEmpleados.js'
import router2 from './routes/routes2.js';

const app = express();
const port =3001;


//microservicios

app.set("port", process.env.PORT || 3001 );
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/autos', router);
app.use('/empleados', routerEmpleados);
app.use('/cars', router2);

app.listen(app.get("port"), ()=>{
    console.log(`Servidor UP corriendo en el puerto ${app.get("port")} `);
});