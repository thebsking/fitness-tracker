const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3003;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(require('./routes/apiRoutes'));
app.use(require('./routes/homeRoutes'))

app.listen(PORT, () => {
    console.log (`Running on port ${PORT}`);
});

