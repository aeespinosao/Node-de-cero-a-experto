const fs = require('fs');
const colors = require('colors');

let listar = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(colors.green(`${base} * ${i} = ${base*i}`));
    }
}
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject('No es numero'.red);
            return;
        }
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${base}.txt`)
                // console.log('The file has been saved!');
        });
    })
}

module.exports = {
    crearArchivo,
    listar
}