const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://gui:Ny4YliPVco6NIw6m@cluster0.o2pwu.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
})

app.use(express.json());
app.use(routes);


app.listen(3333);