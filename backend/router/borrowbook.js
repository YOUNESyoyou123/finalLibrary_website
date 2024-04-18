const express = require("express") ; 
const router = express.Router() ; 
const multer =require("multer") ; 
const borrowbook = require("../models/BorrowingBook")
router.use(express.json());


router.post( "/postborrow", async(req, res) => {
try {
        
    const data = req.body;
    console.log(data);  
     const newborrowbook = new borrowbook(data);
    const savedborrowbook = await newborrowbook.save();
    res.status(201).json(savedborrowbook);
} catch (error) {
    console.error('Error adding borrowbook', error);
    res.status(500).json({ error: 'An error occurred while adding borrowbook.' });
}
});


router.get("/getborrowed", async (req, res) => {
    try {
        const borrowbooks = await borrowbook.find({}); 
        console.log(borrowbooks); 
        res.json(borrowbooks); 
    } catch (error) {
        console.log("Error connecting to database:", error); 
        res.status(500).json({ error: "Internal Server Error" }); 
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      // Assuming BorrowBook ix b s the correct model name
      await borrowbook.findByIdAndDelete(id);
  
      res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
      console.error("Error deleting book:", error);
      res.status(500).json({ error: "An error occurred while deleting the book." });
    }
  });


module.exports=router ; 