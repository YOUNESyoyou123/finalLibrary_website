<<<<<<< HEAD
const mongoose = require('mongoose');

const etudiantsSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    LastName: { type: String, required: true },
    Idcart: { type: String, required: true },
    Motpass: { type: String, required: true },
    Filliere: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    AnneBac: { type: String, required: false },
    birthdayDate:{type: String, required: true },
    role: { type :String , default:"user"}
});

const Etudiant = mongoose.model('Etudiant', etudiantsSchema);
module.exports= Etudiant ; 
=======
const mongoose = require('mongoose');

const etudiantsSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Idcart: { type: String, required: true },
    Motpass: { type: String, required: true },
    Filliere: { type: String, required: true },
    Anne: { type: String, required: true }
});

const Etudiant = mongoose.model('Etudiant', etudiantsSchema);
module.exports= Etudiant ; 
>>>>>>> 184bb55 (Add files via upload)
