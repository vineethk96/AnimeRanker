const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    animeName: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
}, {
  timestamps: true,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;