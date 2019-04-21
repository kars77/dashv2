const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const domainSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  projects: {
	  type: Array,
	  required: false
  }
});

module.exports = mongoose.model('Domain', domainSchema);

