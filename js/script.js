var allLocations = [
  {
    location: {
      lat: 47.052122,
      lng: 8.309038
    },
    name: "Seebrücke",
    address: "Seebrücke, Luzern",
    label: "O",
    activity: ["museum", "outdoor"]
  },
  {
    location: {
      lat: 47.050793,
      lng: 8.310826
    },
    name: "Main Station",
    address: "Zentralstrasse 1, Luzern",
    label: "I",
    activity: "indoor"
  },
  {
    location: {
      lat: 47.05162,
      lng: 8.307509
    },
    name: "Kapellbrücke",
    address: "Kapellbrücke, Luzern",
    label: "O",
    activity: "outdoor"
  },
  {
    location: {
      lat: 47.052873,
      lng: 8.336391
    },
    name: "Verkehrshaus/Transport Museum",
    address: "Lidostrasse 5, 6006 Luzern",
    label: "I",
    activity: "indoor"
  },
  {
    location: {
      lat: 47.054049,
      lng: 8.303184
    },
    name: "Museggmauer/Town Wall",
    address: "6004 Luzern",
    label: "O",
    activity: "outdoor"
  }
]

var ViewModel = function() {
  var self = this;

  this.activityList = ko.observableArray([]);
    for (i = 0; i < allLocations.length; i++) {
      var selectedActivity = allLocations[i].activity;

  this.activityList.push(selectedActivity);
    }
  this.chosenActivity = ko.observableArray([]);

}

ko.applyBindings(new ViewModel());
