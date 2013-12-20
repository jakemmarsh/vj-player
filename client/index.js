Meteor.subscribe("Parties");

if (Meteor.isClient) {
  Template.parties.events = {
    "click #addParty": function (){
      var partyName = window.prompt("Name the party", "My party") || "Anonymous Party";
      if(partyName) {
        Meteor.call("createParty", partyName, function(error, partyId) {
          console.log("created ID:", partyId);
        });
      }
    }
  };
  
  Template.parties.availableParties = function (){
    return Parties.find({});
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
