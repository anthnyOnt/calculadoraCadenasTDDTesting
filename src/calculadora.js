function calcularCadena(cadena) {

    const numeros = cadena.split(',');

    return Number(numeros[0]) + Number(numeros[1]);
}

export default calcularCadena;