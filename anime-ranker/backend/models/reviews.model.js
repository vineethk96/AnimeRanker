const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    reviewID: { type: Number, required: true, unique: true, minlength: 5, maxlength: 5},            // Unique reviewIDs. This will be in the users model
    animeName: { type: String, required: true, unique: true, trim: true, minlength: 3 },            // Anime name
    rating: { type: Number, required: true },                                                       // Rating out of 5
    description: { type: String },                                                                  // Text description of the anime, why you liked it.
}, {
  timestamps: true,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;