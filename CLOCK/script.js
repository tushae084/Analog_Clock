let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

function displayTime(){
let time = new Date();

let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[time.getDay()];
document.getElementById('day').innerHTML = day;

let hh = time.getHours();
let mm = time.getMinutes();
let ss = time.getSeconds();

let hRotation = 30*hh + mm/2;
let mRotation =6*mm;
let sRotation = 6*ss;

hr.style.transform = `rotate(${hRotation}deg)`;
min.style.transform = `rotate(${mRotation}deg)`;
sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval( displayTime, 1000);


