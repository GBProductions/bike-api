import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import LocationService from './js/find-by-location.js';
import TimeService from './js/find-by-time.js';

function clearFields() {
  $('#search').val("");
}

$('document').ready(function() {
  $('#searchButton').click(function(event) {
    event.preventDefault();
    let location = $('#search').val();
    let promise = LocationService.getStolenBikesNearby(location);
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body.bikes);
      for (let i = 0; i < body.bikes.length; i++) {
        $('.output-location').append(`<p class="bike-returned"> ${body.bikes[i]["title"]}, color(s): ${body.bikes[i]["frame_colors"]}, Manufacturer: ${body.bikes[i]["manufacturer_name"]}</p>`);
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
    clearFields();
  });

  //------------------------------------------------------------------------
  $('#within2weeks').click(function(event) {
    event.preventDefault();
    // calculate subtracting two weeks worth of milliseconds to new Date.now, call this date variable minTime
    let minTime = Date.now() - (60 * 24 * 60 * 60 * 1000);
    console.log(TimeService.humanTime(minTime));
    let location = $('#search').val();
    let promise = LocationService.getStolenBikesNearby(location);
    promise.then(function(response, minTime) {
      const body = JSON.parse(response);
      console.log(body.bikes);
      let datesStolen = [];
      body.bikes.forEach(bike => datesStolen.push(bike["date_stolen"]));
      // let recentSteals = body.bikes.map(function(bike) {
      //   let dateStolen = bike["date_stolen"]; 
      //   return dateStolen;
      // });
      console.log(datesStolen);
      // for (const bike of body.bikes) {
      //   console.log(bike["date_stolen"]);
      //   // if (key === "date_stolen" && "date_stolen" > minTime) {
      //   recentSteals.push(bike);
      // //  }
      // }
      
      for (let j = 0; j < body.bikes.length; j++) {
        // if (body.bikes[j]["date_stolen"] > minTime) {
        $('.output-recent').append(`<p class="recent-steal"> ${body.bikes[j]["title"]}, color(s): ${body.bikes[j]["frame_colors"]}, Manufacturer: ${body.bikes[j]["manufacturer_name"]} Reported Stolen: ${TimeService.humanTime(datesStolen[j])}</p>`);
        // }
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
    clearFields();
  });
});