var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
 
autoIncrement.initialize(mongoose.connection);

var GuruSchema = new mongoose.Schema({  
    name: String,
    batch: String,
    age: Number,
    gender: String
});

module.exports = mongoose.model('Guru', GuruSchema);

GuruSchema.plugin(autoIncrement.plugin, 'Guru');