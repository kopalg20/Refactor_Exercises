import { Vehicle } from "../vehicle";
const RENTAL_RATE_CAR = 50;
const INSURANCE_RATE_CAR = 10;
export class Car extends Vehicle{
    private trunkSpace: number;
    private seatingCapacity: number;
    constructor(trunkSpace?: number,seatingCapacity?: number){
        super(RENTAL_RATE_CAR,INSURANCE_RATE_CAR,"car");
        this.trunkSpace = trunkSpace ?? 400;
        this.seatingCapacity = seatingCapacity ?? 5;
    }
    getTrunkSpace(): number{
        return this.trunkSpace;
    }
    getSeatingCapacity(): number{
        return this.seatingCapacity;
    }
    getFormatRentalDetails(days: number): string {
        return `${super.getFormatRentalDetails(days)}\n Trunk Space: ${this.trunkSpace ?? 'N/A'} cu ft, Seating Capacity: ${this.seatingCapacity ?? 'N/A'} persons`;
    }
}