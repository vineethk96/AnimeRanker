const router = require('express').Router();
let User = require('../models/user.model');

// GET all users
router.route('/').get((req, res) => {

  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));

});

// POST add new users
router.route('/add').post((req, res) => {

  // Pull Username from the request body
  const username = req.body.username;

  // Place Username into a User object, and call it newUser
  const newUser = new User({username});

  // Save the newUser into the DB
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});



// GET all friends of user
router.route('/friends').get((req, res) => {
    // TODO
})

// POST update friends
router.route('/friends').post((req, res) => {
    
    const friend = req.body.friend;

    //const newFriend = 
})



// GET user watchList
router.route('/watchList').get((req, res) => {
    // TODO
})

// POST update watchList
router.route('/watchList').post((req, res) => {
    // TODO
})



// GET update reviewList
router.route('/reviewList').get((req, res) => {
    // TODO
})

// POST update reviewList
router.route('/reviewList').post((req, res) => {
    // TODO
})



// DELETE delete users
router.route('/deleteUser').delete((req, res) => {
    // TODO
})

module.exports = router;