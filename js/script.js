var allActivities = ["","outdoor", "indoor", "museum"]

var markerImage = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";




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



// empty array for markers
var markers = [];
// initialize map including markers and info windows
function initMap() {
  // define location of map upon initialization
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: {lat: 47.052216, lng: 8.310492}
  });
  // define/create info window
  var infowindow = new google.maps.InfoWindow();
  // loop through locations to create marker array
  for (var i = 0; i < allLocations.length; i++) {
    var position = allLocations[i].location;
    var name = allLocations[i].name;
    var address = allLocations[i].address;
    var label = allLocations[i].label;
    // create a marker with details from each location in location array
    var marker = new google.maps.Marker({
     position: position,
     name: name,
     address: address,
     label: label,
     map: map,
   });

    // push marker details to marker array
    markers.push(marker);
    // create event listener to open infowindow upon click on marker
    marker.addListener('click', function() {
      openInfoWindow(this, infowindow);
    });
  }
  // info window to open upon click on marker and bring background
  // info stored in locations array
  function openInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent('<h4>' + marker.name + '</h4>' + '<div>' + marker.address +'</div>');
      infowindow.open(map, marker);
      // close info window upon moving to new marker
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
      });
    }
  }
}


// ViewModel to control selection of activities
var ViewModel = function(items) {
  var self = this;





    // define activityList for ViewModel
  this.activityList = ko.observableArray(allActivities);
  this.activityList.sort();

  //TODO: add function to show only marker for selected activity
  // if selectedOptions == allLocations.activity than change marker color

  this.selectedOptions = ko.observableArray([]);

  this.clickedActivity = function() {

   //  var changedMarker = new google.maps.Marker({
   //   position: {lat: 47.052216, lng: 8.310492},
   //   name: "test",
   //   address: "address",
   //   icon: markerImage,
   //   map: map,
   // });
    // remove all markers in order to be able to re-add only markers of selected Locations
    for (i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }

    var selectedActivities = this.selectedOptions();

    for (i = 0; i < allLocations.length; i++) {
        var setActivity = [];
        if (selectedActivities == allLocations[i].activity) {
          setActivity.push(allLocations[i].name);

          console.log(setActivity);
        }


      // check each allLocations.activity





      // if equal to selectedActivty
      // alert "FOUND"
    }


    }







    }















ko.applyBindings(new ViewModel());
