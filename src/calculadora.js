function calcularCadena(cadena) {
  return cadena
    .split(',')
    .reduce((total, n) => total + Number(n), 0);
}

export default calcularCadena;