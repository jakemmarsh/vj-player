Meteor.publish("Parties", function () {
  return Parties.find({});
});