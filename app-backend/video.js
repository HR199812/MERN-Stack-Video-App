const router = require('express').Router();
const Video = require('./video.model');


router.get('/', (req, res) => {
    res.json('hi');
});

router.post('/add', (req, res) => {

    console.log(req.body);
    console.log(req.files);
    // let movie = new Video({
    //     "MovieName": req.body.movieName,
    //     "MovieReleaseDate": req.body.movieReleaseData,
    //     "MovieLanguage": req.body.movieLanguage,
    //     "MovieThumbnail": req.body.movieThumbNail,
    //     "MovieVideo": req.body.movieVideo
    // });

    // movie.save().then(movie => res.status(200).json('Movie Added Successfully'))
    //     .catch(err => res.status(400).send(err));
});

module.exports = router;