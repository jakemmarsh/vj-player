Parties = new Meteor.Collection("parties");

Meteor.methods({
	createParty: function(partyName) {
	    var partyId = Parties.insert({
	    	name: partyName
	    });
	    return partyId;
	},
	deleteParty: function(party) {
		alert(this.userId);
		// only delete party if current user is creator
		if(party.creator === this.userId) {
			Parties.remove({
				_id: partyId
			});
		}
	},
	getParty: function(partyId) {
		var party = Parties.findOne({
	    	_id: partyId
	    });
	    return party;
	},
	getParties: function() {
		var parties = Parties.find({});

		return parties;
	}
});