const router = require('express').Router();
let Review = require('../models/review.model');

// GET all reviews
router.route('/').get((req, res) => {
  Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST add new review
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE delete users
// TODO

module.exports = router;