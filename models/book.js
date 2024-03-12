var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectID, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: {type: Schema.Types.ObjectID, ref: 'Genre'}
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);
