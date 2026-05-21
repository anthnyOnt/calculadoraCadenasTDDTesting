function calcularCadena(cadena) {
  let delimitador = ',';

  if (cadena.startsWith('//')) {
    const partes = cadena.split(' ');
    const encabezado = partes[0];

    delimitador = encabezado[3];
    cadena = partes[1];
  }

  cadena = cadena.replace(/-/g, ',');
  cadena = cadena.replaceAll(delimitador, ',');

  return cadena
    .split(',')
    .reduce((total, n) => total + Number(n), 0);
}


export default calcularCadena;