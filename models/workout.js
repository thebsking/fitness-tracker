const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please choose an exercise type"
      }, 
      name: {
        type: String,
        trim: true,
        required: "Please enter a name for the exercise"
      }, 
      duration: {
        type: Number,
        requireed: "Please enter a duration (in minutes)"
      },
      weight: {
        type: Number,
      },
      reps: { 
        type: Number,
      },
      sets: {
        type: Number,
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
