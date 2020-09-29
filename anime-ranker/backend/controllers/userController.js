const usersRouter = require('./routes/users');

// Display all users
exports.user_list = function(res, req){
    res.send("TODO: Display all Users");
};

// Get one user detail by username
exports.user_detail = function(res, req){
    res.send("TODO: Get one user by username");
};

// Update Friends list
exports.user_updateFriendsList = function(res, req){
    res.send("TODO: update friends list");
};

// Update Anime watch list
exports.user_updateWatchList = function(res, req){
    res.send("TODO: update watch list");
};

// Update Review List
exports.user_updateReviewList = function(res, req){
    res.send("TODO: update reviews list");
};

// Delete User by username
exports.user_delete = function(res, req){
    res.send("TODO: delete user");
};