const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankModel = new Schema({
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('bankModel',bankModel);