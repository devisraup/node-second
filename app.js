const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do');
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('========== TO DO ==========='.green);
            console.log('Por Hacer:');
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('============================'.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('comando no reconocido');
}