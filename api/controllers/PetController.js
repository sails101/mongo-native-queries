/**
 * PetController
 *
 * @description :: Server-side logic for managing pets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function (req,res) {
    Pet.native(function(err, collection) {
      if (err) return res.serverError(err);

      collection.find({}, {
        name: true
      }).toArray(function (err, results) {
        if (err) return res.serverError(err);
        console.log('->',results);
        return res.ok(results);
      });
    });
  }
};

