import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CarSchema = new Schema(
    {
        marca:{type:String},
        stock:{type:Intl},
        precio:{type:Intl},
        idProduct: {type:String}
    },
    {collection: 'carShop'}    
);

export default mongoose.model('CarModel', CarSchema);

