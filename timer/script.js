let count = 0;
let count_seconds = 0;
let count_minutes = 0;
let count_hours = 0;
var hour = document.getElementById('hour')
var minute = document.getElementById('minute')
var seconds = document.getElementById('second')
var miliseconds = document.getElementById('milisecond')
let intervalId;

document.getElementsByClassName('container')[0].addEventListener('click', function(){
    stop();
});

function zero(number){
    return number < 10 ? '0' + number : number;
}

function timer(){
    count++;
    miliseconds.innerHTML = zero(count);
    if (count == 100){
        count = 0;
        miliseconds.innerHTML = zero(count);
        count_seconds++;
        seconds.innerHTML = zero(count_seconds);
    } else if (count_seconds == 60){
        count_minutes++;
        minute.innerHTML = zero(count_minutes);
        count_seconds = 0;
        seconds.innerHTML = zero(count_seconds);
    } else if (count_minutes == 60){
        count_hours++;
        hour.innerHTML = zero(count_hours);
        count_minutes = 0;
        minute.innerHTML = zero(count_minutes);
    }
}
intervalId = setInterval(timer, 10)

function stop() {
    clearInterval(intervalId);
    count = count;
    miliseconds.innerHTML = zero(count);
    seconds.innerHTML = zero(count_seconds);
    minute.innerHTML = zero(count_minutes);
    hour.innerHTML = zero(count_hours);
}