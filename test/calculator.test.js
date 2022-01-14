const calc = require("../assets/js/main");

const x = 25;
const y = 5;

describe('Calculator Test', function () {
    test("Adding numbers",() => {
        expect(calc.add(x,y)).toBe(30);
    });

    test("Subtracting numbers",() => {
        expect(calc.subtract(x,y)).toBe(20);
    });

    test("Multiplying numbers",() => {
        expect(calc.multiply(x,y)).toBe(125);
    });

    test("Dividing numbers",() => {
        expect(calc.divide(x,y)).toBe(5);
    });

    test("Checking modulus",() => {
        expect(calc.add(x,y)).toBe(0);
    });
});