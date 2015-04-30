
// Buttons
var start = document.getElementById('start')
var pause = document.getElementById('pause')
var reset = document.getElementById('reset')
var increment;

// Time
var seconds = 0

//Event Listeners
start.addEventListener("click", startTime)
pause.addEventListener("click", pauseTime)
reset.addEventListener("click", resetTime)

//Functions (to increment the time)
function incrementTime(){
    document.getElementById("timer").innerHTML = "Stop Watch:" + seconds;
    seconds++;
}





//Functions (to increment the time by interval)
function startTime() {
         increment = setInterval(incrementTime, 1000);
}

//Functions  to pause time
function pauseTime() {
          clearInterval(increment)  //clearInterval is like pulling out a battery in your watch. thus it cancels the repeated action
}


// Functions to reset time
function resetTime() {
          seconds = 0
}


//Incrementer
