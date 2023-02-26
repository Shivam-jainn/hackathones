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
    let path = require('path');
     path = path.join(__dirname, '..','/Public/Education/Colleges/clgDemoSignUp.html');
    res.sendFile(path);
}


function getCollegeDashboardPage(req,res) {
    let path = require('path');
    path = path.join(__dirname, '..','/Public/Education/Colleges/clgDashboard.html');
    res.sendFile(path);
}



module.exports = eduCollegeRouter;