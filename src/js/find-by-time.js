export default class TimeService {  
  // static findRecentStolen (timeSince) {
  //   return new Promise(function(resolve, reject) {
  //     let request = new XMLHttpRequest();
  //     const url = `https://bikeindex.org/api/v3/search?per_page=3&location=${location}&distance=50&stolenness=stolen`;
  //     request.onload = function() {
  //       if (this.status === 200) {
  //         resolve(request.response);
  //       } else {
  //         reject(request.response);
  //       }
  //     };
  //     request.open("GET", url, true);
  //     request.send();
  //   });
  // }
  // Write a function that takes in a value stored as an instance of Date in JS and returns the value as a human-readable Date (MM/DD/YYYY)
  static humanTime(dateInstance) {
    // let date = new Date(dateInstance);
    const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayNum = dateInstance.getDate();
    let hours = dateInstance.getHours();
    if (hours.length < 2) {
      hours = "0" + hours;
    }
    let minutes = dateInstance.getMinutes();
    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }
    const month = monthsOfYear[dateInstance.getMonth()];
    const year = dateInstance.getFullYear();
    const humanDateTime = `${month} ${dayNum} ${year}, at ${hours}:${minutes}`;
    return humanDateTime;
  }
}
const dateNTimeNow = Date.now();
// console.log(`The current date and time: ${humanTime(dateNTimeNow)}`);

// // From StackOverflow, dealing with date/time in JavaScript:

// let nowTime = new Date.now(); // Date.now() grabs the UTC, but this may be what all the date/timestamps are in, even the Bikes API
// console.log(nowTime);

// let unix_timestamp = 1549312452
// // Create a new JavaScript Date object based on the timestamp
// // multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var date = new Date(unix_timestamp * 1000);
// // Hours part from the timestamp
// var hours = date.getHours();
// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();
// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();

// // Will display time in 10:30:23 format
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// console.log(formattedTime);

