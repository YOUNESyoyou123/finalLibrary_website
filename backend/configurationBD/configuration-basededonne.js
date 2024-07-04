const mongoose = require("mongoose");

// Modify the connection string to connect to your MongoDB cluster
const connectionString =
  "mongodb+srv://djjdjfxdjdid:younes@cluster0.c4d5zdw.mongodb.net/Biblio?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB cluster");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB cluster:", err);
  });

module.exports = mongoose;
/*
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Biblio")
  .then(() => {
    console.log("connected ");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = mongoose;
*/
