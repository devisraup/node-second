const fs = require('fs');
const { traceDeprecation } = require('process');

let listadoToDo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) reject(err);
    });
}

const cargarDB = () => {
    try {
        listadoToDo = require('../db/data.json');
    } catch (error) {
        listadoToDo = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let toDo = {
        descripcion: descripcion,
        completado: false
    }


    listadoToDo.push(toDo);

    guardarDB();

    return toDo;
}

const getListado = () => {
    try {
        return require('../db/data.json');
    } catch (error) {
        return [];
    }

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoToDo.findIndex(task => {
        return task.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoToDo.filter(task => {
        return task.descripcion !== descripcion;
    });

    if (listadoToDo === index) {
        return false;
    } else {
        listadoToDo = index;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear: crear,
    getListado: getListado,
    actualizar: actualizar,
    borrar: borrar
}