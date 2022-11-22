import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema(
    {
        nombre:{type:String},
        correo:{type:String},
        cargo:{type:String}
    },
    {collection: 'empleados'}

);

export default mongoose.model('EmpleadosModel', EmpleadosSchema);