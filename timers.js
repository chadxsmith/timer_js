
// Buttons
var start = document.getElementById('start')
var pause = document.getElementById('pause')
var reset = document.getElementById('reset')
var increment;

// Time
seconds = 0


//Event Listeners
start.addEventListener("click", startTime)
pause.addEventListener("click", pauseTime)
reset.addEventListener("click", resetTime)

//Functions
function startTime(){

      increment = setInterval(function startTime() {  //setInterval is putting a batter in your watch
          document.getElementById("timer").innerHTML = "Stop Watch:" + seconds;
          seconds++;
      }, 1000);

}


function pauseTime() {
      clearInterval(increment)  //clearInterval is like pulling out a battery in your watch
}

function resetTime() {
      seconds = 0
}


//Incrementer
