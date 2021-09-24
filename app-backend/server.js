const cors = require('cors');
const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());

const videos = require('./video');
app.use('/videos', videos);

/* Connection to MongoDB Compass */
mongoose.connect('mongodb://localhost:27017/VideoApp',
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('Connection to Compass is successful');
    }).catch((error) => {
        console.log(error);
    });

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});