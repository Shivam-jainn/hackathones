const express = require('express');


const landingpagerouter = express.Router();



landingpagerouter
.route('/')
.get(getLandingPage);


function getLandingPage(req,res){
     let path = require('path');
     path = path.join(__dirname, '..','/Public/landingpage.html');
    res.sendFile(path);
}

module.exports = landingpagerouter;
