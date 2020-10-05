const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Create an express app and set the Port to 5000
const app = express();
//const PORT = process.env.PORT || 5000;
 
app.use(cors());                                            // Enable use of Cors: Secures web app on a domain level
app.use(express.json());                                    // Expects all requests to be in JSON format
app.use(express.urlencoded( {extended: true} ));            // Allows for easier conversion on input types

// Import URI from .env
const uri = process.env.ATLAS_URI;

// Connect to the Atlas DB using mongoose
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false } );
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// -- MIDDLEWARE --
// Includes modules from the routes files (reviews.js and users.js)
const usersRouter = require('./routes/users');
//const reviewsRouter = require('./routes/reviews');

// When the base path matches users or reviews, it searches through the above modules to execute a request
app.use('/users', usersRouter);
//app.use('/reviews', reviewsRouter);


// begin to listen on Port 5000 (line 8)
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});