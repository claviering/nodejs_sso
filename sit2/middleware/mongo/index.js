const mongoose = require('mongoose');
const debug = require('debug')('sit2:mongo');
const config = require('../../env');
module.exports = () => mongoose.connect( config.db.hosts, { useNewUrlParser: true })
  .then(() => debug('MongoDB Connected Success'))
  .catch(err => debug(err));
