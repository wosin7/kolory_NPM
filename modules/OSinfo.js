var os = require('os');
var colors = require('colors');
var timer = require('../modules/time');
function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    console.log('System:' .grey, type);
    console.log('Release:' .red, release);
    console.log('CPU model:' .blue, cpu);
    timer.print()
    console.log('User name:' .yellow, userInfo.username);
    console.log('Home dir:' .white, userInfo.homedir);
}
exports.print = getOSinfo;