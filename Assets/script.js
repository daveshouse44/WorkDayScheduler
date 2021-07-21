// Day and time variables
var today = moment().format("dddd MMM DD, YYYY h:mma");
var currentHour = moment().hour();


// Displays time in header that updates each minute
function displayTime() {
var today = moment().format("dddd MMM DD, YYYY h:mma");
$("#currentTime").html(today);
}
displayTime();
//setInterval(displayTime, 1000);

// This function colors rows compared to current time
function setRowColor() {
    setInterval(function(){
        currentHour = moment().format("H");
        $(".time-block").each(function () {
            var hour = parseInt($(this).attr("id"));
            console.log(currentHour);
            console.log(hour);
            if (hour < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } 
            else if (hour == currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }, 1000);
}
setRowColor();

// Save user imputs to local storage
function saveEventImput (e){
    e.preventDefault();
    console.log("I was clicked", e.target);
    ////// look up .each in jQuery
    eventImput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log("eventImput", eventImput, time);
    //Store
    localStorage.setItem(time, eventImput);
      if (eventImput === "") {
        alert("Add an event to save to the Scheduler!");
      }
  }
  //On click event
  $('.saveBtn').on('click', saveEventImput);

  // Retrieve Imputs
  $(".description").each(function(){
    var hour = parseInt($(this).parent().attr("id"));
    console.log("time", hour, "current time", currentTime); 
    console.log("description", localStorage.getItem(hour)); 
    $(this).children(".description").val(localStorage.getItem(hour));
}) 