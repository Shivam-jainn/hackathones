const express = require('express');
const nonprofitRouter = express.Router();


nonprofitRouter
.route('/demo')
.get(nonprofitDemoPage);

nonprofitRouter
.route('/dashboard')
.get(nonprofitDashBoardPage);


function nonprofitDemoPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Nonprofit/openngo.html');
}


function nonprofitDashBoardPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Nonprofit/openngodash.html');
}



module.exports = nonprofitRouter;