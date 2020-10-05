// Imports mongoose from the mongoose dependency
const mongoose = require('mongoose');                                                           // import mongoose from 'mongoose'

// Create a mongoose schema object
const schema = mongoose.Schema;

const userSchema = new schema({
    username: { type: String, required: true, unique: true, trim: true, minlength: 3 },         // Unique Usernames that the users create
    watchList: { type: Array },                                                                 // Array of anime that they want to watch
    friendsList: { type: Array },                                                               // Array of friends
    reviews: { type: Array },                                                                   // Array of Unique reviewIDs
  },
  {
  timestamps: true,
  }
);

// Prep user to be sent to the web app
const User = mongoose.model('User', userSchema);

module.exports = User;                                                                          // export default User;
