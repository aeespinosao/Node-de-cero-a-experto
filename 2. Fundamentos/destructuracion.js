let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regenereación',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - ${this.poder}`;
    }
}

console.log(deadpool.getNombre());

//Destructuración

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);