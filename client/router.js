Meteor.Router.add({
  '/': 'index',
  '': 'index',

  '/party/:id': { to: 'party', and: function(id) {
  	Meteor.call("getParty", id, function(error, party) {
      Session.set('currentParty', party);
    });
  }},

  '*': 'not_found'
});