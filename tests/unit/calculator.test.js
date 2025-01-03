const calculator = require('/home/sallesp/Documents/ROADMAP-STUDY/DEV/CURSO_DEV/clone-tabnews/src/models/calculator.js');

test("somar 2 + 2 = 4", () => {
  const result = calculator.somar(2, 2);
  expect(result).toBe(4);
});

test("somar 5 + 100 = 105", () => {
  const result = calculator.somar(5, 100);
  expect(result).toBe(105);
});

test("somar 'banana' + 100 = 'Erro'", () => {
  const result = calculator.somar("banana", 100);
  expect(result).toBe("Erro");
});