if (Meteor.isClient) {
  Template.party.partyName = function() {
      var party = Session.get('currentParty');
      return party.name;
  };
}