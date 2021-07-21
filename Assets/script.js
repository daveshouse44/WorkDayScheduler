// Day and time variables
var today = moment().format("dddd MMM DD, YYYY h:mma");
var currentHour = moment().hour();


// Displays time in header that updates each minute
function displayTime() {
var today = moment().format("dddd MMM DD, YYYY h:mma");
$("#currentTime").html(today);
}
setInterval(displayTime, 1000);

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

