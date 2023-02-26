const express = require('express');
const nonprofitRouter = express.Router();


nonprofitRouter
.route('/demo')
.get(nonprofitDemoPage);

nonprofitRouter
.route('/dashboard')
.get(nonprofitDashBoardPage);


function nonprofitDemoPage(req,res) {
    let path = require('path');
    path = path.join(__dirname, '..','/Public/Education/Colleges/clgDemoSignUp.html');
    res.sendFile(path);
}


function nonprofitDashBoardPage(req,res) {
    let path = require('path');
    path = path.join(__dirname, '..','/Public/Education/Colleges/clgDemoSignUp.html');
    res.sendFile(path);
}



module.exports = nonprofitRouter;