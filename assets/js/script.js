const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let h = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(h < 10) h = '0' + h;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;

    hours.textContent = h;
    minutes.textContent = min;
    seconds.textContent = sec;

})