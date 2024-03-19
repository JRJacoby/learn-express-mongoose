let Author = require('../models/author'); 

get_author_list = async () => {
  try {
    let authorsList = await Author.find();
    return authorsList.map(author => {
      
      return {
        name: author.name,
        lifespan: author.lifespan
      };
    });
  } catch (error) {
    console.error("Error fetching authors:", error);
    throw error; 
  }
};

exports.show_all_authors = function(res) {
  get_author_list()
    .then(data => res.json(data)) 
    .catch(_ => res.status(500).send('No authors found'));
}