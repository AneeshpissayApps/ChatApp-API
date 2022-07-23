var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    uri: String,
    filename: String,
    type: String,
    size: Number
});

var UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true
    },
    otp: {
        type: Number
    },
    photo: PhotoSchema,
    loggedIn: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);