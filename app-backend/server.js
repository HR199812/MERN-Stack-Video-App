const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

/* Connection to MongoDB Compass */
mongoose.connect('mongodb://localhost:27017/VideoApp',
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('Connection to Compass is successful');
    }).catch((error) => {
        console.log(error);
    });


const videosRouter = require('./video');
app.use('/videos', videosRouter);


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
