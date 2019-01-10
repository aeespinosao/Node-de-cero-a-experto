const optCrear = {
    descripcion: {
        alias: 'd',
        demand: true
    }
}

const optActualizar = {
    descripcion: {
        alias: 'd',
        demand: true
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const optBorrar = {
    descripcion: {
        alias: 'd',
        demand: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optCrear)
    .command('actualizar', 'Actualiza el estado de una tarea', optActualizar)
    .command('borrar', 'Borrar elemento por hacer', optBorrar)
    .help()
    .argv;

module.exports = {
    argv
}