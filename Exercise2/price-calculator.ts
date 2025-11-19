class PriceCalculator {
    calculate(basePrice: number, days: number, customerType: string): number {
        let total = basePrice * days;
        
        if (customerType === "regular") {
            return total;
        } else if (customerType === "premium") {
            return total * 0.9;  // 10% off
        } else if (customerType === "corporate") {
            return total * 0.85;  // 15% off
        }
        
        return total;
    }
}
const calculator = new PriceCalculator();
console.log(calculator.calculate(50, 5, "premium")); // 225