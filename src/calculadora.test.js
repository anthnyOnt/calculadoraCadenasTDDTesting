import calcularCadena from "./calculadora";

test('retorna el mismo número cuando recibe uno solo', () => {
  expect(calcularCadena("5")).toBe(5);
});

test('suma dos números separados por coma', () => {
  expect(calcularCadena("1,2")).toBe(3);
});

test('suma múltiples números', () => {
  expect(calcularCadena("1,2,4,8")).toBe(15);
});