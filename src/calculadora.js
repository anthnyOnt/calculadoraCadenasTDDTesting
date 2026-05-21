function normalizarSeparadores(cadena, delimitador) {
  return cadena
    .replace(/-/g, ',')
    .replaceAll(delimitador, ',');
}

function obtenerDelimitador(cadena) {
  if (!cadena.startsWith('//')) {
    return { delimitador: ',', numeros: cadena };
  }

  const partes = cadena.split(' ');
  const encabezado = partes[0];

  return {
    delimitador: encabezado[3],
    numeros: partes[1]
  };
}

function calcularCadena(cadena) {
  const { delimitador, numeros } = obtenerDelimitador(cadena);

  return normalizarSeparadores(numeros, delimitador)
    .split(',')
    .map(Number)
    .filter(n => n <= 1000)
    .reduce((total, n) => total + n, 0);
}

export default calcularCadena;