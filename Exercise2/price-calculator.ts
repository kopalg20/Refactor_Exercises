import { Regular } from "./customer-types/regular";
import { Premium } from "./customer-types/premium";
import { Corporate } from "./customer-types/corporate";
import { Student } from "./customer-types/student";
import { Weekend } from "./customer-types/weekend";
import { CustomerTypeEnum,StrategyTypeEnum } from "./enum";

class PriceCalculator {
    startegy: StrategyTypeEnum;
    regular: Regular;
    premium: Premium;
    corporate: Corporate;
    student: Student;
    weekend: Weekend;
    constructor(strategy: StrategyTypeEnum = StrategyTypeEnum.Strategy_A) {
        this.startegy = strategy;
        this.regular = new Regular(this.startegy);
        this.premium =  new Premium(this.startegy);
        this.corporate = new Corporate(this.startegy);
        this.student = new Student(this.startegy);
        this.weekend = new Weekend(this.startegy);
    }
    setStrategy(strategy: StrategyTypeEnum) {
        this.startegy = strategy;
    }
    calculate(basePrice: number, days: number, customerType: string): number {
        let total = basePrice * days;
        if (customerType === CustomerTypeEnum.Regular) {
            return total * (1-this.regular.getDiscountRate());
        } else if (customerType === CustomerTypeEnum.Premium) {
            return total *(1-this.premium.getDiscountRate());
        } else if (customerType === CustomerTypeEnum.Corporate) {
            return total-(1-this.corporate.getDiscountRate());
        } else if (customerType === CustomerTypeEnum.Student) {
            return total*(1-this.student.getDiscountRate());
        }else if (customerType === CustomerTypeEnum.Weekend) {
            return total*(1-this.weekend.getDiscountRate());
        }
        return total;
    }
}
const calculator = new PriceCalculator();
console.log(calculator.calculate(50, 5, "premium")); // 225