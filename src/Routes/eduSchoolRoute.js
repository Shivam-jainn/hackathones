
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
    let path = require('path');
    path = path.join(__dirname, '..','/Public/Education/School/schoolDemoSignUp.html');
    res.sendFile(path);
}




function getSchoolDashboardPage(req,res) {
    let path = require('path');
    path = path.join(__dirname, '..','/Public/Education/School/schoolDashboard.html');
    res.sendFile(path);
}











module.exports = eduSchoolRouter;
