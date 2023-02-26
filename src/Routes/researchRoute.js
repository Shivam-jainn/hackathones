const express = require('express');
const researchRouter = express.Router();



researchRouter
.route('/:typeid')
.get(getResearchForm);


function getResearchForm(req,res){
    let path = require('path');
    path = path.join(__dirname, '..','/Public/Education/Colleges/clgDemoSignUp.html');
    res.sendFile(path);
}

module.exports = researchRouter;

