const router = require('express').Router();
const {Workout} = require('../models');

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercises.duration' },
        }
    }])
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
        $push: {
            exercises: req.body,
        }
    }, {
        new: true,
    })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.get('/api/workouts/range', (reg, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercises.duration' },
            totalWeight: { $sum: '$exercises.weight' }
        }
    }]).limit(7)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports = router;