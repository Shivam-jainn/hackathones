const express = require('express');
const researchRouter = express.Router();



researchRouter
.route('/:typeid')
.get(getResearchForm);


function getResearchForm(req,res){
    res.sendFile('/home/shivamjain/Documents/Code/Hackthones-team/src/Public/Research/openchalCompanyForm.html');
}

module.exports = researchRouter;

