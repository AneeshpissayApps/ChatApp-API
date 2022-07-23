
const mongoose = require("mongoose");
const uri = "mongodb+srv://Aneeshpissay:Aneeshpissay@aneeshpissayapps.k1d5ube.mongodb.net/?retryWrites=true&w=majority";
const client = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;

