require('dotenv').config();
let initDatabase = require('./config/database');
const mongoose = require('mongoose');


initDatabase();


let catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

let Cat = mongoose.model('Cat', catSchema);

let george = new Cat({
  name:'Gilli',
  age:'9',
  temperament:'Bret'
});

george.save(function(err, result) {
  if(err) {
    console.log('Something went wrong.');
  } else {
    console.log('we just saved a cat to the database..')
  }
});

Cat.create({
  name: 'Tiny',
  age:'5',
  temperament:'Unknown'
},function(err, res) {
  if(err) {
    console.log('Cannot create..');
  } else {
    console.log('cat saved successfully');
  }
});

Cat.find({}, function(err, cats) {
  if(err) {
    console.log(err);
  } else {
    console.log(cats);

  }
})