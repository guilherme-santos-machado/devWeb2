const mongoose = require('mongoose');

const EntidadeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    date_created:{
        type: Date,
    },
    date_updated:{
        type: Date,
    },
    date_deleted:{
        type: Date,
    }
});

let entidade = module.exports  = mongoose.model('entidade', EntidadeSchema);

module.exports.get = (callback,limit) => {
    entidade.find(callback).limit(limit);
}
