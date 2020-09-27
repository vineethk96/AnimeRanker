const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
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
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});