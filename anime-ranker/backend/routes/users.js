const router = require('express').Router();
let User = require('../models/user.model');

var user_controller = require('../controllers/userController');

// ------- U S E R S -----------------------------------------------------------------------

// GET all users
router.get('/all', user_controller.user_list);

// GET single user by _id
router.get('/:id', user_controller.get_user_by_id);

// POST add new users
router.post('/add', user_controller.add_user);

// ------- F R I E N D S -------------------------------------------------------------------

// GET all friends of a user
router.get('/friends/:id', user_controller.get_friends_by_id);

// PATCH a new friend to the user
router.patch('/friends/add/:id', user_controller.update_friends_by_id);

// PATCH to remove a friend of the user
router.patch('/friends/remove/:id', user_controller.remove_friend_by_id);

// ------- W A T C H L I S T ---------------------------------------------------------------

// GET all watchlist of a user
router.get('/watchlist/:id', user_controller.get_watchlist_by_id);

// PATCH a new anime to the user
router.patch('/watchlist/add/:id', user_controller.update_watchlist_by_id);

// PATCH remove an anime by user
router.patch('/watchlist/remove/:id', user_controller.remove_watchlist_by_id);

// ------- R E V I E W L I S T -------------------------------------------------------------

// GET all reviewlist of a user
router.get('/reviewlist/:id', user_controller.get_reviewlist_by_id);

// PATCH a new review to the user
router.patch('/reviewlist/add/:id', user_controller.update_reviewlist_by_id);

// PATCH remove a review by user
router.patch('/reviewlist/remove/:id', user_controller.remove_reviewlist_by_id);

// ------- O T H E R -----------------------------------------------------------------------

// DELETE delete users
router.delete('/deleteUser/:id', user_controller.remove_user);

// Error handler
router.use((error, req, res, next) => {

    res.status(404);
    res.json("Bad Request sent to Users API");
});


module.exports = router;