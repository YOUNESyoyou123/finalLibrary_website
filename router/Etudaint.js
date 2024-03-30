const express = require("express") ; 
const router = express.Router() ; 
const multer =require("multer") ; 
const Etudiant = require("../models/model");
const jwt =require( "jsonwebtoken" ) ; 
router.use(express.json());


router.post("/etudiants", async (req, res) => {
    try {
        
        const data = req.body;
        console.log(data)    ;  
         const newEtudiant = new Etudiant(data);
        const savedEtudiant = await newEtudiant.save();
        res.status(201).json(savedEtudiant);
    } catch (error) {
        console.error('Error adding student:', error);
        res.status(500).json({ error: 'An error occurred while adding the student.' });
    }
});
router.post("/younes", async (req, res) => {
    const { Name, Motpass } = req.body;
  
    try {
      const user = await Etudiant.find({ Name, Motpass });
  
      if (user.length > 0) {
        //res.json(user);
        const token = jwt.sign({id:user[0]._id},"younes")
        return res.json({user,token,userId:user[0]._id  })
      } else {
        res.status(401).json("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send("Internal server error");
    }
  })

// GET route to fetch all students
router.get("/etudiants", (req, res) => {
    Etudiant.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;