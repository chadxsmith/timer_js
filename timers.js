
// Buttons
var start = document.getElementById('start')
var pause = document.getElementById('pause')
var reset = document.getElementById('reset')
var increment;

// Time
seconds = 0
minutes = 0


//Event Listeners
start.addEventListener("click", startTime)
pause.addEventListener("click", pauseTime)
reset.addEventListener("click", resetTime)

//Functions
function startTime(){

      increment = setInterval(function() {  //setInterval is putting a batter in your watch
          document.getElementById("timer").innerHTML = minutes + ":" + seconds;
          seconds++;
          if (seconds === 60) {
            minutes++;
            seconds = 0
          }
      }, 1);

}

function pauseTime() {
      clearInterval(increment)  //clearInterval is pulling the battery out of your watch
}

function resetTime() {
      minutes = 0
      seconds = 0
}
