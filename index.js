var OSinfo = require('./modules/OSinfo');
var timer = require('./modules/time');

process.stdin.setEncoding('utf-8');
process.stdout.write('Witam w programie. Wpisz komendy: \n /info aby wyświetlić wersję noda \n /lang aby wyświetlić język systemowy \n /exit żeby wyjść\n');
console.log('/sayhello żeby powiedzieć hello');
console.log('/getOSinfo żeby uzyskać informacje o systemie');
process.stdin.on('readable', function() {
    
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
    switch(instruction) {
        case "/exit": 
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
        case "/info":
        process.stdout.write('Wersja noda: '+ process.versions.node+'\n');
        break;
        case "/lang":
        process.stdout.write('Język systemowy: '+ process.env.LANG+'\n');
        break;
        case '/sayhello':
        process.stdout.write('hello!\n');
        break;
        case '/getOSinfo':
        OSinfo.print();
        break;
        default:
        process.stderr.write('Wrong instruction!\n');
    }
}
    

});
