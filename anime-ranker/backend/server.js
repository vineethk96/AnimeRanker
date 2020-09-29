const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Create a express object and set the Port to 5000
const app = express();
const PORT = process.env.PORT || 5000;

// Enable use of Cors - make this listen to port 5000? idts?
app.use(cors());

app.use(express.json());

// Import URI from .env
const uri = process.env.ATLAS_URI;

// Connect to the Atlas DB using mongoose
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true } );
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Includes modules from the routes files (reviews.js and users.js)
const usersRouter = require('./routes/users');
const reviewsRouter = require('./routes/reviews');

// When the base path matches users or reviews, it searches through the above modules to execute a request
app.use('/users', usersRouter);
//app.use('/reviews', reviewsRouter);


// begin to listen on Port 500 (line 8)
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});