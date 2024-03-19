let BookInstance = require('../models/bookinstance');
let Book = require('../models/book'); 

exports.show_all_books_status = function() {
  return BookInstance.find({ status: 'Available' })
    .populate('book'); 
};
