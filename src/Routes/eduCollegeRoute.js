// COLLEGES ROUTES
const express = require('express');


const eduCollegeRouter = express.Router();



eduCollegeRouter
.route('/demo')
.get(getCollegesignupPage);


eduCollegeRouter
.route('/:Collegename')
.get(getCollegeDashboardPage);


function getCollegesignupPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Education/Colleges/clgDemoSignUp.html');
}


function getCollegeDashboardPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Education/Colleges/clgDashboard.html');
}



module.exports = eduCollegeRouter;