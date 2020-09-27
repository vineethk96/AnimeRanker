const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, minlength: 3 },         // Unique Usernames that the users create
    watchList: { type: Array },                                                                 // Array of anime that they want to watch
    friendsList: { type: Array },                                                               // Array of friends
    reviews: { type: Array }                                                                    // Array of Unique reviewIDs
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
