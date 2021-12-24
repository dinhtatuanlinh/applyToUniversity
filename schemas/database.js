const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.DATABASE);


const connectionDatabase = mongoose.connection;
connectionDatabase.on('error', () => { console.log('connection error') }); // phải dùng function hoặc arrow function ở đây

var candidatesSchema = new mongoose.Schema({
    name: String,
    gender: Boolean,
    email: String,
    birthday: Number,
    address: String,
    cccd: Object,
    permanantresidence: String,
    phone: String,
    applyinfo: String,
    family: Array,
    avatar: String,
    file: String,
    status: String,
    approval: String,
    payment: String,
});

connectionDatabase.once('open', function() {
    // we're connected! 
    console.log('database connected');
    var collections = Object.keys(connectionDatabase.collections);
    console.log(collections);

});

module.exports = {
    candidatesModel: mongoose.model('candidates', candidatesSchema),
}