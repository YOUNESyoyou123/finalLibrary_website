
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    image:{ type: String, required: true },
    Namebook:{ type: String, required: true } , 
    Copy :{ type: Number, required: true } , 
    Author:{ type: String, required: true } ,
    Edition:{ type: String, required: true } 
   /* NameBook: { type: String, required: true },
    CopyAvailable: { type: String, required: true },
    
    image:{
        data: Buffer,
        contentType: String
    }
    */
});



const trendsbook= mongoose.model("books",bookSchema ) ; 
module.exports= trendsbook ; 