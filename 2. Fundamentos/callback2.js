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

let getEmpleado = (id, callback) => {
    let empleadodb = empleados.find(empleado => empleado.id === id);

    if (!empleadodb) {
        callback(`El id ${id} no existe en la bd`)
    } else {
        callback(null, empleadodb)
    }
}

let getSalario = (empleado, callback) => {
    let salariodb = salarios.find(salario => empleado.id === salario.id);

    if (!salariodb) {
        callback(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salariodb.salario
        });
    }
}

getEmpleado(10, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log(salario);
    });
});