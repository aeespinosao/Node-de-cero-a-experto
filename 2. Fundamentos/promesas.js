let empleados = [{
        id: 1,
        nombre: 'Hernando'
    },
    {
        id: 2,
        nombre: 'Carlos'
    },
    {
        id: 3,
        nombre: 'Andres'
    }
];

let salarios = [{
        id: 1,
        salario: 200
    },
    {
        id: 2,
        salario: 3000
    }
];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadodb = empleados.find(empleado => empleado.id === id);

        if (!empleadodb) {
            reject(`El id ${id} no existe en la bd`)
        } else {
            resolve(empleadodb);
        }
    });
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salariodb = salarios.find(salario => empleado.id === salario.id);

        if (!salariodb) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salariodb.salario
            });
        }
    });
}

getEmpleado(2).then(empleado => {
    // console.log('Empleado de DB', empleado);
    return getSalario(empleado);
}).then(salario => {
    console.log(`El salario de ${salario.nombre} es ${salario.salario}`);
}).catch(err => {
    console.log(err);
})