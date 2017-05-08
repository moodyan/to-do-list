//business logic
function City(destination, arrive, depart, transport, activities) {
  this.destination = destination;
  this.arrive = arrive;
  this.depart = depart;
  this.transport = transport;
  this.activities = activities;

}

// City.prototype.itinerary = function() {
//   return this.destination;
// }

// user interface logic
$(document).ready(function() {
  $("form#new-vacation").submit(function(event) {
    event.preventDefault();
debugger;
    var destinationInput = $("input#new-destination").val();
    var arrivalDateInput = $("input#new-arrival").val();
    var departureDateInput = $("input#new-departure").val();
    var transportInput = $("input#new-transport").val();
    var activityInput = $("input#new-activity").val();

    var newCity = new City(destinationInput, arrivalDateInput, departureDateInput, transportInput, activityInput);

    $("ul#cities").append("<li><span class='city'>" + destinationInput + "</span></li>");

    $(".city").last().click(function() {
      $("#show-city").show();
      $("#show-city h2").text(newCity.destination);
      $(".arrive-city").text(newCity.destination);
      $(".arrive-date").text(newCity.arrive);
      $(".departure-date").text(newCity.depart);
      $(".transport-info").text(newCity.transport);
      $(".activities").text(newCity.activities);

    });

    $("input#new-destination").val("");
    $("input#new-arrival").val("");
    $("input#new-departure").val("");
    $("input#new-transport").val("");
    $("input#new-activity").val("");
  });
});
