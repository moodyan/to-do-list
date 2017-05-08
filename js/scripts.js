//business logic
function City(destination, arrive, nights) {
  this.destination = destination;
  this.arrivalDate = arrive;
  this.nights = nights;
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
    var stayLengthInput = $("input#new-nights").val();

    var newCity = new City(destinationInput, arrivalDateInput, stayLengthInput);

    $("ul#cities").append("<li><span class='city'>" + destinationInput + "</span></li>");

    $(".city").last().click(function() {
      $("#show-city").show();
      $("#show-city h2").text(newCity.destination);
      $(".arrive-city").text(newCity.destination);
      $(".arrive-date").text(newCity.arrivalDate);
      $(".nights").text(newCity.nights);

    });

    $("input#new-destination").val("");
    $("input#new-arrival").val("");
    $("input#new-nights").val("");
  });
});
