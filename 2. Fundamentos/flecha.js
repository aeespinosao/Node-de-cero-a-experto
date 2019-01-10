function sumar1(a, b) {
    return a + b;
}

console.log(sumar1(1, 2));

let sumar2 = (a, b) => {
    return a + b;
}
console.log(sumar2(1, 2));

function saludar1() {
    return 'Hola mundo';
}

console.log(saludar1());

let saludar2 = () => 'Hola mundo';

console.log(saludar2());

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regenereación',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - ${this.poder}`;
    }
}

console.log(deadpool.getNombre());