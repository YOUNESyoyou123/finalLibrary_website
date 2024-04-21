const express = require("express");
const router = express.Router();
const multer = require("multer");
const Book = require("../models/bookmodel");
const path = require('path');
const fs = require('fs');

// Ensure to use express.json() middleware before defining routes
router.use(express.json());
router.use(express.static('backend'));//idk wait ndir test khfifa brk

// Define multer storage configuration
const mystorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,path.join(__dirname, '../Uploads')); 
    },
    filename: (req, file, cb) => {
        let date = Date.now();
        let f1 = date + "." + file.mimetype.split('/')[1];
        cb(null, f1);
    }
});



// Initialize multer with defined storage
const upload = multer({ storage: mystorage });

// Define route for adding a book with image upload
router.post('/addbook', upload.single("image"), (req, res) => {
    // Ensure req.file exists before accessing its properties
    if (!req.file) {
        return res.status(400).send({ error: "No file uploaded" });
    }

    // Validate other required fields from req.body
    if (!req.body.NameBook || !req.body.CopyAvailable) {
        return res.status(400).send({ error: "NameBook and CopyAvailable are required" });
    }

    // Create new book object with data
    const newBook = new Book({
        NameBook: req.body.NameBook,
        CopyAvailable: req.body.CopyAvailable,
        image: {
            data: fs.readFileSync(path.join(__dirname, '../Uploads', req.file.filename)),
            contentType: req.file.mimetype
        }
    });

    // Save the new book to the database
    newBook.save()
        .then(savedBook => {
            // Send the saved book as response
            res.status(200).send(savedBook);
            // Remove the uploaded file if needed
          fs.unlinkSync(path.join(__dirname, '../Uploads', req.file.filename));
        })
        .catch(err => {
            // Handle errors
            console.error("Error saving book:", err);
            res.status(500).send({ error: "Internal Server Error" });
        });
});
router.get('/images', (req, res) => {
    Book.find({})
        .then(books => {
            res.status(200).send(books.map(book => ({
                NameBook: book.NameBook,
                image: {
                    data: book.image.data.toString('base64'), 
                    contentType: book.image.contentType
                }
            })));
        })
        .catch(err => {
            console.error("Error fetching books:", err);
            res.status(500).send({ error: "Internal Server Error" });
        });
});

router.post('/upload', upload.single("file") , (req,res)=>{
    Book.create({image:req.file.filename}).then(
        result=>res.json(result)
    ).catch(err => console.log(err))
    
})
router.post('/uploadd', upload.single("file"), (req, res) => {
    console.log("hello world ")
        Book.create({
      image: req.file.filename,
      Namebook: req.body.NameBook,
      Copy:req.body.Copy,
      Author : req.body.Author,
      Edition: req.body.Edition
    
    }).then(
      result => res.json(result)
    ).catch(err => console.log(err))
});
router.get("/getImage",(req,res)=>{
    Book.find({}).then(users => res.json(users)).catch(err =>console.log(err))

} )


router.put('/books/:id', async (req, res) => {
    try {
      const bookId = req.params.id;
      const updatedCopy = req.body.Copy; // Assuming you're sending the updated number of copies in the request body
  
      // Find the book by ID and update the number of copies
      const updatedBook = await Book.findByIdAndUpdate(bookId, { Copy: updatedCopy }, { new: true });
  
      res.json(updatedBook); // Respond with the updated book document
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });




  router.get("/booksq", (req, res) => {
    Book.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send(err);
        });
});


router.delete('/books/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) return res.status(404).send('Book not found');
      res.send(deletedBook);
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).send('Internal Server Error');
    }
  });




  router.delete('/bookss/:id', async (req, res) => {
    try {
      const bookId = req.params.id;
  
      // Find the book by ID and update the number of copies
      const updatedBook = await Book.findByIdAndDelete(bookId,{ new: true });
  
      res.json(updatedBook); // Respond with the updated book document
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// Export the router
module.exports = router;
