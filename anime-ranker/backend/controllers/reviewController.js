const reviewsRouter = require('./routes/reviews');

// Display all reviews
exports.review_list = function(res, req){
    res.send("TODO: Display all Reviews");
};

// Find a single review by ID
exports.review_findbyID = function(res, req){
    res.send("TODO: find review by ID");
};

// Delete review by ID
exports.review_deleteID = function(res, req){
    res.sent("TODO: Delete review by ID");
};