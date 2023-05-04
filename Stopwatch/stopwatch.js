let milliseconds = 0
let seconds = 0
let minutes = 0
let digits = document.getElementById("digits")
let interval;
let lapList = document.getElementById("myList")
let startButton = document.getElementById("startButton")
let lapButton = document.getElementById("lapButton")
lapButton.disabled = true


function Start () {
    lapButton.disabled = false
    startButton.disabled = true

    interval = setInterval(function() {
        milliseconds = milliseconds + 10

        if (milliseconds >= 1000) {
            seconds = seconds + 1
            milliseconds = 0
        }

        if (seconds >= 60) {
            minutes = minutes + 1
            seconds = 0
        }
        console.log(minutes)
        console.log(seconds)
        console.log(milliseconds)
        digits.innerHTML = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + ":" + milliseconds/10
    }, 10);
}

function Stop () {
    lapButton.disabled = true
    startButton.disabled = false
    clearInterval(interval)
}

function Restart () {
    Stop()
    milliseconds = 0
    seconds = 0
    minutes = 0
    digits.innerHTML = "00:00:00"
    myList.innerHTML = ""
}

function laps () {
    let newListItem = document.createElement("li")
    newListItem.textContent = digits.innerHTML = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + ":" + milliseconds/10
 
    myList.appendChild(newListItem)
}