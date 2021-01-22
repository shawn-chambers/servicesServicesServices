const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pictures', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', () => console.error('error connecting to mongodb'))
db.on('open', () => console.log('connected to mongodb'))

module.exports.db = db;