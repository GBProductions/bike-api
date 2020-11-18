export default class LocationService {  
  static getStolenBikesNearby (location) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      if (location.includes(" ") || location.includes(',')) {
        location = location.replace(/ /g,"%20");
        location = location.replace(/,/g, "%2C")
      }
      const url = `https://bikeindex.org/api/v3/search?per_page=25&location=${location}&distance=50&stolenness=stolen`;
      console.log(url)
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}