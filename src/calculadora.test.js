import calcularCadena from "./calculadora";

test('retorna el mismo número cuando recibe uno solo', () => {
  expect(calcularCadena("5")).toBe(5);
});