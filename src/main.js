import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import LocationService from './js/find-by-location.js';

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
});