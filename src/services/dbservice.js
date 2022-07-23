
const mongoose = require("mongoose");
const uri = process.env.MONGODBURI;
const client = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;

