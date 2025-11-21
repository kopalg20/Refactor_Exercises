import { StrategyTypeEnum } from "./enum";
import { CustomerFactory } from "./customer-factory";

class PriceCalculator {
    startegy: StrategyTypeEnum;
    constructor(strategy: StrategyTypeEnum = StrategyTypeEnum.Strategy_A) {
        this.startegy = strategy;
    }
    setStrategy(strategy: StrategyTypeEnum) {
        this.startegy = strategy;
    }
    calculate(basePrice: number, days: number, customerType: string): number {
        let total = basePrice * days;
        const factory = new CustomerFactory();
        const customer = factory.create(customerType, this.startegy);
        const discountRate = customer.getDiscountRate();
        total = total * (1-discountRate);
        return total;
    }
}
const calculator = new PriceCalculator();
console.log(calculator.calculate(50, 5, "premium")); // 225
calculator.setStrategy(StrategyTypeEnum.Strategy_C);
console.log(calculator.calculate(50, 5, "premium")); // 200