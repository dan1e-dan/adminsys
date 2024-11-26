const express = require('express');
const staffrouter= require("./routes/staffs"); 
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use('/staffs',staffrouter)
const url = "mongodb+srv://Swz:Racing12@cluster0.1zi2y.mongodb.net/"; // Replace with  MongoDB connection URL
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;


try {
    con.on('open', () => {
        console.log('Connected to the database completed');
    })
} catch (error) {
    console.log("Error: " + error);
}
const port = 3000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});


