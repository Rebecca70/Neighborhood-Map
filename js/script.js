var allActivities = ["","outdoor", "indoor", "museum"]

var allLocations = [
  {
    location: {
      lat: 47.052122,
      lng: 8.309038
    },
    name: "Seebrücke",
    address: "Seebrücke, Luzern",
    label: "O",
    activity: allActivities[1]
  },
  {
    location: {
      lat: 47.050793,
      lng: 8.310826
    },
    name: "Main Station",
    address: "Zentralstrasse 1, Luzern",
    label: "I",
    activity: allActivities[2]
  },
  {
    location: {
      lat: 47.05162,
      lng: 8.307509
    },
    name: "Kapellbrücke",
    address: "Kapellbrücke, Luzern",
    label: "O",
    activity: allActivities[1]
  },
  {
    location: {
      lat: 47.052873,
      lng: 8.336391
    },
    name: "Verkehrshaus/Transport Museum",
    address: "Lidostrasse 5, 6006 Luzern",
    label: "I",
    activity: [allActivities[2], allActivities[3]]
  },
  {
    location: {
      lat: 47.054049,
      lng: 8.303184
    },
    name: "Museggmauer/Town Wall",
    address: "6004 Luzern",
    label: "O",
    activity: allActivities[1]
  }
]

// ViewModel to control selection of activities
var ViewModel = function(items) {
  var self = this;
  // define activityList for ViewModel
  this.activityList = ko.observableArray(allActivities);
  this.activityList.sort();





  //TODO: add function to show only marker for selected activity
  this.chosenActivity = ko.observableArray(allActivities);
  this.selection = ko.computed(function() {
    var selectedActivity = [];
      for (var i = 0; i < allActivities.length; i++) {
        var activity = allActivities[i];
      }
    console.log(activity);
  });




  };


  // for test purpose only




ko.applyBindings(new ViewModel());
