var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var PostModelSchema = new Schema({
    timestamp: String,
    status: String,
    snapshot_url: String,
    script_log: String,
    harfile_url: String,
    duration: Number
});


// Compile model from schema
var MonitorPostModel = mongoose.model('monitor_us_us', PostModelSchema );

module.exports = MonitorPostModel;

