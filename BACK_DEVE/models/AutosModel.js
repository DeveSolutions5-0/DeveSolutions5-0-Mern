import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        marca:{type:String},
        stock:{type:Intl},
        precio:{type:Intl}
    },
    {collection: 'autos'}

);

export default mongoose.model('AutosModel', ProductSchema)