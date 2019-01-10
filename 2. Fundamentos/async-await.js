// let getnombre = async() => {

//     throw new Error('No existe');
//     return 'Andres';
// }

// // console.log(getnombre());

// getnombre().then((nombre) => {
//     console.log(nombre);
// }).catch((e) => {
//     console.log(e);
// });

let getnombre = async() => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fernando');
        }, 3000)
    })
}


let saludo = async() => {

        let nombre = await getnombre();
        return `Hola ${nombre}`;
    }
    // console.log(getnombre());

saludo().then((mensaje) => {
    console.log(mensaje);
});