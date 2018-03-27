var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
 
autoIncrement.initialize(mongoose.connection);

var StudentSchema = new mongoose.Schema({  
    name: String,
    batch: String,
    age: Number,
    gender: String
});

module.exports = mongoose.model('Student', StudentSchema);

StudentSchema.plugin(autoIncrement.plugin, 'Student');