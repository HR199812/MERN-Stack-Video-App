const mongoose = require('mongoose');

const schema = mongoose.Schema;


const videosSchema = new schema({
    MovieName: {
        type: String,
        required: true,
        trim: true,
    },
    MovieReleaseDate: {
        type: String,
        required: true,
        trim: true,
    },
    MovieLanguage: {
        type: String,
        required: true,
        trim: true,
    },
    MovieThumbnail: {
        type: String,
        required: true,
        trim: true,
    },
    MovieVideo: {
        type: String,
        required: true,
        trim: true,
    }
},
    { timestamps: true }
);

const Video = mongoose.model('video', videosSchema);

module.exports = Video;