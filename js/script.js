var today = new Date();
var hour = today.getHours();

var name = 'John Doe'

var sleepGreet = 'Time for Bed '
var morningGreet = 'Good Morning '
var afternoonGreet = 'Good Afternoon '
var eveningGreet = 'Good Evening '


if(hour>=23 && hour<6){
    document.getElementById('greetings').innerText = sleepGreet + name + '!';
} else if (hour >=7 && hour<12){
    document.getElementById('greetings').innerText = morningGreet + name + '!';
} else if (hour >= 12 && hour < 16){
    document.getElementById('greetings').innerText = afternoonGreet + name + '!';
} else {
    document.getElementById('greetings').innerText = eveningGreet + name + '!';
}
