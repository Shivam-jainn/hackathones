
const express = require('express');


// SCHOOL ROUTES

const eduSchoolRouter = express.Router();


eduSchoolRouter
.route('/demo')
.get(getSchoolignupPage);


eduSchoolRouter
.route('/:schoolname')
.get(getSchoolDashboardPage);


function getSchoolignupPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Education/School/schoolDemoSignUp.html');
}




function getSchoolDashboardPage(req,res) {
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Education/School/schoolDashboard.html');
}











module.exports = eduSchoolRouter;
