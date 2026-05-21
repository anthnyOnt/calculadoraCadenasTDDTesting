import calcularCadena from "./calculadora";

test('retorna el mismo número cuando recibe uno solo', () => {
  expect(calcularCadena("5")).toBe(5);
});

test('suma dos números separados por coma', () => {
  expect(add("1,2")).toBe(3);
});