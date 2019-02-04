var fs = require('fs');

//-- Leer el fichero Test.txt, que NO existe
fs.readFile('Test.txt', 'utf8', (err, data) => {
    console.log("---> Comienzo del fichero leido")
    console.log(data)
    console.log("---> Final del fichero")
});
