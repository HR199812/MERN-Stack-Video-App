const mongoose = require('mongoose');

const schema = mongoose.Schema;

const videosSchema = new schema({
    VideoName: {
        type: String,
        required: true,
        trim: true,
    },
    VideoReleaseDate: {
        type: Date,
        required: true,
        trim: true,
    },
    VideoLanguage: {
        type: String,
        required: true,
        trim: true,
    },
    VideoSource: {
        type: String,
        required: true,
        trim: true,
    },
    VideoVideoURL: {
        type: String,
        required: true,
        trim: true,
    }
},
    { timestamps: true }
);

const Video = mongoose.model('video', videosSchema);

module.exports = Video;