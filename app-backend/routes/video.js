const router = require('express').Router();
const Video = require('../models/video.model');


router.get('/', (req, res) => {
    try{
        Video.find().then(videos => res.json(videos)).catch(err => res.json(err));
    }catch(err){

    }
});

router.post('/add', (req, res) => {

    console.log(req.body);
    let video = new Video({
        "VideoName": req.body.videoName,
        "VideoReleaseDate": req.body.videoReleaseData,
        "VideoLanguage": req.body.videoLanguage,
        "VideoSource": req.body.videoSource,
        "VideoVideoURL": req.body.videoVideoURL
    });

    video.save().then(video => res.status(200).json('Video Added Successfully'))
        .catch(err => res.status(400).send(err));
});

module.exports = router;