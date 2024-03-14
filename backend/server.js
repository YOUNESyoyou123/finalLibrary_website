<<<<<<< HEAD
  const express = require("express");
  const app = express();
  const Bookrouter = require("./router/book");
  const Etudiantrouter = require("./router/Etudaint");
  const borrowbookeouter = require("./router/borrowbook")
  const mongoose = require('mongoose');
  mongoose.set('strictQuery', true);
  const Etudiant = require("./models/model");
  const cors = require("cors");
  const path = require('path');
  // Assuming "./configurationBD/configuration-basededonne" sets up database configurations
  require("./configurationBD/configuration-basededonne");
  app.use(cors());
  app.use(express.json());
  const options = {};
  app.use(express.static(path.join(__dirname, "../backend/Uploads")));
  app.listen(3000, () => {
      console.log("Server is running on port 3000");
  });

  // POST route to add a new student
  app.post("/etudiants", async (req, res) => {
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
  app.post("/younes", async (req, res) => {
      const { Name, Motpass } = req.body;
    
      try {
        const user = await Etudiant.find({ Name, Motpass });
    
        if (user.length > 0) {
          res.json(user);
        } else {
          res.status(401).json("Invalid username or password");
        }
      } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal server error");
      }
    })

  // GET route to fetch all students
  app.get("/etudiants", (req, res) => {
      Etudiant.find()
          .then(users => {
              res.send(users);
          })
          .catch(err => {
              res.send(err);
          });
  });


  app.use("/Book", Bookrouter);
  app.use("/etudiant", Etudiantrouter) ; 
  app.use("/borrowbook" ,borrowbookeouter)
=======
const express = require("express");
const app = express();
const Etudiant = require("./models/model");
const cors = require("cors");
// Assuming "./configurationBD/configuration-basededonne" sets up database configurations
require("./configurationBD/configuration-basededonne");
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// POST route to add a new student
app.post("/etudiants", async (req, res) => {
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
app.post("/younes", async (req, res) => {
    const { Name, Motpass } = req.body;
  
    try {
      const user = await Etudiant.find({ Name, Motpass });
  
      if (user.length > 0) {
        res.json(user);
      } else {
        res.status(401).json("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send("Internal server error");
    }
  })

// GET route to fetch all students
app.get("/etudiants", (req, res) => {
    Etudiant.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send(err);
        });
});
>>>>>>> 184bb55 (Add files via upload)
