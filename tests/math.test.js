const math =  require("../server");

test("Soma 5 + 10 igual a 15", () => {
    expect(math.add(5, 10)).toBe(15);
});

test("Subtrai 10 - 5 igual a 5", () => {
    expect(math.substract(10, 5)).toBe(5);
});

test("Multiplica 5 * 10 igual a 50", () => {
    expect(math.multiply(5, 10)).toBe(50);
});

test("Divide 10 / 5 igual a 2", () => {
    expect(math.divide(10, 5)).toBe(2);
});