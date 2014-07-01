/**
 * PetController
 *
 * @description :: Server-side logic for managing pets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  find: function(req, res) {
    Pet.native(function(err, collection) {
      if (err) return res.serverError(err);

      // In this example, I'm using a native query to do a projection (i.e. SQL "SELECT")
      // But you can do anything here - this collection is directly from the raw mongo driver.
      collection.find({}, {
        name: true
      }).toArray(function(err, results) {
        if (err) return res.serverError(err);
        console.log('->', results);
        return res.ok(results);
      });
    });
  }
};
