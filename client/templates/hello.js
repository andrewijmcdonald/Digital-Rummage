Template.hello.helpers({
  name: function () {
    if (Meteor.user()) {
      return Users.getDisplayName(Meteor.user());
    } else {
      return "You";
    }
  }
});

Template.hello.helpers({
  pageFoo : function() {
    FlowRouter.watchPathChange();
    return FlowRouter.current().route.name;
  },
});