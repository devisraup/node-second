const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Desc de la tarea'
}

const completado = {
    alias: 'c',
    default: true
}

const params = {
    descripcion: descripcion,
    completado: completado
}

const argv = require('yargs')
    .command('crear', 'crea una tarea', {
        descripcion: descripcion
    })
    .command('actualizar', 'actualiza una tarea', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion: descripcion
    })
    .help()
    .argv

module.exports = {
    argv: argv
}