var User = require('../models/user.model');

// Display all Users
exports.user_list = function(req, res, next){

    User.find((error, data) => {
        if(error){
            return next(error);
        }
        else{
            res.json(data);
            console.log("All Users Displayed")
        }
    });

};

// Get user by username in body
exports.get_user_by_username = function(req, res, next){

    User.findOne(req.body, (error, data) => {
        if(error){
            return next(error);
        }
        else{
            res.json(data);
            console.log("User was found")
        }
    });

};

// Get user by id in the URL
exports.get_user_by_id = function(req, res, next){

    User.findById(req.params.id, (error, data) =>{
        if(error){
            console.log("Error occurs here!")
            return next(error);
        }
        else{
            res.json(data);
            console.log("User was found by ID");
        }
    });

};

// Add new user
exports.add_user = function(req, res){

    User.create(req.body, (error, data) => {

        if(error){
            return next(error)
        }
        else{
            res.json(data)
            console.log("User was added")
        }
    });

};

// Remove user
exports.remove_user = function(req, res){

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