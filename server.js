var express = require("express");
var cors = require('cors')
var app = express();
var client = require("./src/services/dbservice");
//Use Cors
app.use(cors());
//Add Port
var PORT = process.env.PORT || 5000;


app.listen(PORT, function () {
    client.then(() => {
        console.log("MongoDB is connected");
    });
    console.log('API is running on PORT ' + PORT);
});

