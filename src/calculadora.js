function calcularCadena(cadena) {
  cadena = cadena.replace(/-/g, ',');

  return cadena
    .split(',')
    .reduce((total, n) => total + Number(n), 0);
}

export default calcularCadena;