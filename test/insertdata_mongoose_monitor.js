const PostModel = require('../models/monitor');
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/monitor';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//check connection
db.once('open', function(){
  console.log('connected to MongoDB');
  var postObj = [
    {timestamp: "2023-10-26T15:00:00", duration:10, status: "failure", snapshot_url: "./images/snapshot_2023-10-26T15:00:00.jpg",script_log:"./logs/script_2023-10-26T15:00:00.log",harfile:"./logs/harfile_2023-10-26T15:00.har"},
    {timestamp: "2023-10-26T15:05:00", duration:13, status: "success", snapshot_url: "./images/snapshot_2023-10-26T15:05:00.jpg",script_log:"./logs/script_2023-10-26T15:05:00.log",harfile:"./logs/harfile_2023-10-26T15:05.har"},
    {timestamp: "2023-10-26T15:10:00", duration:12, status: "success", snapshot_url: "./images/snapshot_2023-10-26T15:10:00.jpg",script_log:"./logs/script_2023-10-26T15:10:00.log",harfile:"./logs/harfile_2023-10-26T15:10.har"},
    {timestamp: "2023-10-26T15:15:00", duration:11, status: "success", snapshot_url: "./images/snapshot_2023-10-26T15:15:00.jpg",script_log:"./logs/script_2023-10-26T15:15:00.log",harfile:"./logs/harfile_2023-10-26T15:15.har"},
    {timestamp: "2023-10-26T15:20:00", duration:10, status: "success", snapshot_url: "./images/snapshot_2023-10-26T15:20:00.jpg",script_log:"./logs/script_2023-10-26T15:20:00.log",harfile:"./logs/harfile_2023-10-26T15:20.har"},
    {timestamp: "2023-10-26T15:25:00", duration:9, status: "failure", snapshot_url: "./images/snapshot_2023-10-26T15:25:00.jpg",script_log:"./logs/script_2023-10-26T15:25:00.log",harfile:"./logs/harfile_2023-10-26T15:25.har"}
  ];
  //var potatoBag = [{name:'potato1'}, {name:'potato2'}];

  //var Potato = mongoose.model('Potato', PotatoSchema);
  PostModel.collection.insertMany(postObj, function (err, docs){
      if (err) {
          // TODO: handle error
          console.log('insert data error');
      } else {
          console.info('data were successfully stored.', docs.length);
      }
  });
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.close();

