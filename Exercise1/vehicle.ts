export abstract class Vehicle{
    rentalRate: number;
    insuranceRate: number;
    constructor(rentalRate: number,insuranceRate: number){
        this.rentalRate = rentalRate;
        this.insuranceRate = insuranceRate;
    }
    getRentalCost(days: number): number {
        return this.rentalRate * days;
    }
    getInsuranceCost(days: number): number {
        return this.insuranceRate * days;
    }
    getFormatRentalDetails(days: number): string {
        const rentalCost = this.getRentalCost(days);
        const insuranceCost = this.getInsuranceCost(days);
        const totalCost = rentalCost + insuranceCost;
        return `Rental Cost: $${rentalCost}, Insurance Cost: $${insuranceCost}, Total Cost: $${totalCost}`;
    }
}