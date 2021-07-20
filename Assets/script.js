// Displays time in header that updates each minute
var displayTimeEl = ("#currentTime");

function displayTime() {
var today = moment().format("dddd MMM DD, YYYY h:mma");
$("#currentTime").html(today);
console.log(today);
}
setInterval(displayTime, 1000);