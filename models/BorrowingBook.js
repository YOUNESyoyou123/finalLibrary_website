
const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Idcart: { type: String, required: true },
    Filliere: { type: String, required: true },
    Namebook:{ type: String, required: true } , 
    Datedebut :{ type: String, required: true } , 
    Datefin :{ type: String, required: true } , 
    Author:{ type: String, required: true } ,
    Edition:{ type: String, required: true } 
});



const borrowbook= mongoose.model("borrow", borrowSchema) ; 
module.exports= borrowbook ; 