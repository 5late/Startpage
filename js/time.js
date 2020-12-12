window.onload = Clock();

function Clock() {
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

var setto12 = false;

var d = new Date();
var m = monthNames[d.getMonth()];
var dd = d.getDate();
var min = (mins = ('0'+d.getMinutes()).slice(-2));
var hh = d.getHours();
var ampm = '';

if(setto12){
    ampm = hh >= 12 ? 'pm': ' am';
    hh = hh %12;
    hh = hh ? hh : 12;
}

document.getElementById('hour').innerText = hh;
document.getElementById('minutes').innerText = min + ampm;
document.getElementById('separator').innerText = ':'
document.getElementById('month').innerText = m;
document.getElementById('day').innerText = dd;

setTimeout(Clock, 1000);
}