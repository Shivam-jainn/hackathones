const express = require('express');

const corpRouter = express.Router();


corpRouter
.route('/demo')
.get(getCorpSignupPage);


corpRouter
.route('/:corpname')
.get(getCorpDashboardPage);


function getCorpSignupPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Corp/CompanySignUp.html');
}




function getCorpDashboardPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Corp/corpdashboard.html');
}




module.exports = corpRouter;