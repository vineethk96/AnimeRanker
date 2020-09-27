const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    watchList: { type: Array },
    friendsList: { type: Array },
    reviews: { type: Array }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
