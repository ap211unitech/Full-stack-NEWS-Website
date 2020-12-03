const express = require("express");
const expresslayouts = require("express-ejs-layouts");
const path = require("path");
const bodypasrser = require("body-parser");

//Initialize app
const app = express();

//For Setting up EJS
app.use(expresslayouts);

//Set template engine
app.set('view engine', 'ejs');

// JSON Data
app.use(bodypasrser.json());
app.use(bodypasrser.urlencoded({ extended: false }));

//Setting views directory
app.set("views", path.join(__dirname, '/views'));

//Static Folder
app.use(express.static(path.join(__dirname, '/public')));



//End Points
app.use("/", require("./routes/news"));
// app.use("/article", require("./routes/singlenews"));



app.listen(5000, () => {
    console.log("Server started at port 5000");
})