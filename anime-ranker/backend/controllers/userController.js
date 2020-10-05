var User = require('../models/user.model');

// ------- U S E R S -----------------------------------------------------------------------

// Display all Users
exports.user_list = function(req, res, next){

    User.find((error, data) => {
        if(error){
            console.log("Error occurs when all users are being displayed.")
            return next(error);
        }
        else{
            res.json(data);
            console.log("All Users Displayed")
        }
    });

};

// Get user by id in the URL
exports.get_user_by_id = function(req, res, next){

    User.findById(req.params.id, (error, data) =>{
        if(error){
            console.log("Error occurs when attempting to find user by id")
            return next(error);
        }
        else{
            res.json(data);
            console.log("User was found by ID");
        }
    });

};

// Add new user
exports.add_user = function(req, res, next){

    User.create(req.body, (error, data) => {

        if(error){
            console.log("Error occurs when new user is being added.")
            return next(error)
        }
        else{
            res.json(data)
            console.log("User was added")
        }
    });

};

// ------- F R I E N D S -------------------------------------------------------------------

// Get friend by id in the URL
exports.get_friends_by_id = function(req, res, next){

    User.findById(req.params.id, (error, data) =>{
        if(error){
            console.log("Error occurs when finding a friend by the userid")
            return next(error);
        }
        else{
            res.json(data.friendsList);
            console.log("Friends was found by ID");
        }
    });

};

// Update friends list by id
exports.update_friends_by_id = function(req, res, next){

    var friendsObj = {}


    User.findByIdAndUpdate(req.params.id, {"$addToSet": {friendsList: req.body.name}}, (error, data) => {

        console.log("it made it here");

        if(error){
            console.log("Error occurs when adding a friend by id");
            return next(error);
        }
        else{
            res.json(data.friendsList);
            console.log("New Friend was added");
        }
    });
};

exports.remove_friend_by_id = function(req, res, next){
    // TODO
};

// ------- W A T C H L I S T ---------------------------------------------------------------

exports.get_watchlist_by_id = function(req, res, next){
    // TODO
};

exports.update_watchlist_by_id = function(req, res, next){
    // TODO
};

exports.remove_watchlist_by_id = function(req, res, next){
    // TODO
};

// ------- R E V I E W L I S T -------------------------------------------------------------

exports.get_reviewlist_by_id = function(req, res, next){
    // TODO
};

exports.update_reviewlist_by_id = function(req, res, next){
    // TODO
};

exports.remove_reviewlist_by_id = function(req, res, next){
    // TODO
};

// Remove user
exports.remove_user = function(req, res, next){

    User.findByIdAndDelete(req.params.id, (error, data) => {

        if(error){
            return next(error);
        }
        else{
            res.status(200).json({ msg: data });
            console.log("removed User")
        }
    });
};