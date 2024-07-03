const express = require("express");
const app = express();
const Bookrouter = require("./router/book");
const trendsbook = require("./router/trensbook");
const Etudiantrouter = require("./router/Etudaint");
const borrowbookeouter = require("./router/borrowbook");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Etudiant = require("./models/model");
const cors = require("cors");
const path = require("path");
const  book = require("./models/bookmodel")
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



// GET route to fetch all students


//mokhttar test search
app.post("/api/search", async (request, response) => {
  try {
    const { searchValue } = request.body;
   
    const foundbook = await book.findOne({ Namebook: searchValue });

    if (foundbook) {
      response.status(200).json(foundbook); 
    } else {
      response.status(404).json({ error: 'Book not found' });
    }

    console.log(foundbook);
  } catch (error) {
    console.error("Error founding a  ", error);
    response.status(500).json({ error: 'Error' });
  }
});


app.use("/Book", Bookrouter);
app.use("/etudiant", Etudiantrouter);
app.use("/borrowbook", borrowbookeouter);
app.use("/trendsbook", trendsbook);