const router = require('express').Router();
const Workout = require('../models/workout.js');

router.post('/api/workouts', ({body}, res) => {
    Workout.create(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        })
} )

module.exports = router;