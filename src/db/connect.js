const mongoose = require('mongoose');
const dblink = 'mongodb+srv://shivamhack:root%402901@cluster0.v4k6qeu.mongodb.net/?retryWrites=true&w=majority'



mongoose.connect(dblink)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));