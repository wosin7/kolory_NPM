var os = require('os');
var colors = require('colors');
function timer() {
var uptime = os.uptime();
var seconds;
var minut;
var hour;
if (uptime < 3600){
   // console.log('w ifie');
    hour = 0;
    minut = Math.floor(uptime / 60);
    seconds = Math.floor(uptime % 60);
} 
else {
   // console.log('w elsie');
    hour = Math.floor(uptime / 3600);
    minut = Math.floor((uptime % 3600)/60);
    seconds = Math.floor((uptime % 3600) % 60)
}
if (hour > 0){
    console.log('Uptime: ' .green +hour+' godzin, '+minut+' minut, '+seconds+' sekund.');
} 
else {
    console.log('Uptime: ' .green +minut+' minut, '+seconds+' sekund.');
}
}
exports.print = timer;