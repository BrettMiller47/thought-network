const { connect, connection } = require('mongoose');

connect('mongodb://localhost/thoughtNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;