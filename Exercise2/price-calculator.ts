import { Regular } from "./customer-types/regular";
import { Premium } from "./customer-types/premium";
import { Corporate } from "./customer-types/corporate";
import { Student } from "./customer-types/student";
import { Weekend } from "./customer-types/weekend";

class PriceCalculator {
    calculate(basePrice: number, days: number, customerType: string): number {
        let total = basePrice * days;
        if (customerType === "regular") {
            return new Regular(total).getPrice();
        } else if (customerType === "premium") {
            return new Premium(total).getPrice();
        } else if (customerType === "corporate") {
            return new Corporate(total).getPrice();
        } else if (customerType === "student") {
            return new Student(total).getPrice();
        }else if (customerType === "weekend") {
            return new Weekend(total).getPrice();
        }
        return total;
    }
}
const calculator = new PriceCalculator();
console.log(calculator.calculate(50, 5, "premium")); // 225