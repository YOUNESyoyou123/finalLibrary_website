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
module.exports=router ; 