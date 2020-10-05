const router = require('express').Router();
let User = require('../models/user.model');

var user_controller = require('../controllers/userController');

// GET all users
router.get('/allUsers', user_controller.user_list);

// GET single user by username
router.get('/username', user_controller.get_user_by_username);

// GET single user by _id
router.get('/:id', user_controller.get_user_by_id);

// POST add new users
router.post('/add', user_controller.add_user);

// GET all friends of user
router.get('/friends', (req, res) => {
    // TODO
})

// PATCH update friends
router.patch('/friends/:userID', (req, res) => {

    // Pull username and friend name from the request
    const username = req.body.username;    
    const friend = req.body.friend;

    // try{
    //     const currUser = await User.findOne({username: username});

    //     currUser.friend.append(friend);
    // }

    // Add the friend to the friends list

})



// GET user watchList
router.get('/watchList', (req, res) => {
    // TODO
})

// PATCH update watchList
router.patch('/watchList/:userID', (req, res) => {
    // TODO
})



// GET update reviewList
router.get('/reviewList', (req, res) => {
    // TODO
})

// PATCH update reviewList
router.patch('/reviewList/:userID', (req, res) => {
    // TODO
})



// DELETE delete users
router.delete('/deleteUser/:id', user_controller.remove_user);

// Error handler
router.use((error, req, res, next) => {

    res.status(400);
    res.json("You done fucked up");
});


module.exports = router;