const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
// let argv = process.argv;

console.log(argv);
let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listar(base, limite);
        return;
    case 'crear':
        console.log('Crear');
        console.log(base);
        crearArchivo(base).then((archivo) => {
            console.log(`Archivo creado ${archivo}`);
        }).catch((err) => {
            console.log(err);
        });
        return;
    default:
        console.log('Comando no reocnocido');
        return;
}