setTimeout(() => {
    console.log('Hola mundo desde callback');
}, 3000);

let usuariobyid = (id, callback) => {
    let usuario = {
        nombre: 'Andres',
        id,
    }

    if (id === 20) {
        callback(`El usuario con id ${id} no existe en la bd`);
    } else {
        callback(null, usuario);
    }
}

usuariobyid(0, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
})