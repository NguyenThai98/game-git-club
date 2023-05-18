const mongoose = require('mongoose');


async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/start_game')
        console.log('Connection to db successfully !!!');
    } catch (error) {
        console.log('Connection failure !!!');
    }
}
module.exports = {connect};