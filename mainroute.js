const express = require('express');

const app = express();

const port = 3000
app.listen(port);

const landingpagerouter = require('./src/Routes/landingpagerouter.js');
app.use('/', landingpagerouter);

const eduSchoolRouter = require('./src/Routes/eduSchoolRoute.js');
app.use('/school', eduSchoolRouter);

// app.use('/corps', corpRouter);

const eduCollegeRouter = require('./src/Routes/eduCollegeRoute.js');
app.use('/college', eduCollegeRouter);


const corpRouter = require('./src/Routes/corproute');
app.use('/corps', corpRouter);


const nonProfitRoute = require('./src/Routes/nonprofitRoute');
app.use('/ngo', nonProfitRoute);


const researchRouter = require('./src/Routes/researchRoute');
app.use('/research', researchRouter);
