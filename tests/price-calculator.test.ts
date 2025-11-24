import { PriceCalculator } from "../Exercise2/price-calculator";
import { StrategyTypeEnum } from "../Exercise2/enum";

describe("PriceCalculator", () => {

    test("Strategy A → Premium → 10% off", () => {
        const calc = new PriceCalculator(StrategyTypeEnum.Strategy_A);
        const result = calc.calculate(50, 5, "premium");
        expect(result).toBe(225);
    });

    test("Strategy C → Premium → 20% off", () => {
        const calc = new PriceCalculator(StrategyTypeEnum.Strategy_C);
        const result = calc.calculate(50, 5, "premium");
        expect(result).toBe(200); 
    });

    test("Strategy A → Corporate → 15% off", () => {
        const calc = new PriceCalculator(StrategyTypeEnum.Strategy_A);
        const result = calc.calculate(100, 2, "corporate");
        expect(result).toBe(170);
    });

    test("Strategy B → No discounts for anyone", () => {
        const calc = new PriceCalculator(StrategyTypeEnum.Strategy_B);
        const result = calc.calculate(100, 3, "premium");
        expect(result).toBe(300);
    });

    test("Strategy C → Corporate → 30% off", () => {
        const calc = new PriceCalculator(StrategyTypeEnum.Strategy_C);
        const result = calc.calculate(200, 1, "corporate");
        expect(result).toBe(140);
    });

    test("Student → 20% off", () => {
        const calc = new PriceCalculator();
        const result = calc.calculate(50, 4, "student");
        expect(result).toBe(160);
    });

    test("Weekend → 25% surcharge", () => {
        const calc = new PriceCalculator();
        const result = calc.calculate(100, 2, "weekend");
        expect(result).toBe(250);
    });

    test("Strategy switching at runtime", () => {
        const calc = new PriceCalculator(StrategyTypeEnum.Strategy_A);

        expect(calc.calculate(50, 5, "premium")).toBe(225);

        calc.setStrategy(StrategyTypeEnum.Strategy_C);

        expect(calc.calculate(50, 5, "premium")).toBe(200);
    });
});
