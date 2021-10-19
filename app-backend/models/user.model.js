const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({

},
    { timestamps: true }
);

const User = mongoose.Model('User', userSchema);
module.exports = User;