import { Vehicle } from "../vehicle";
const RENTAL_RATE_ELECTRIC_CAR = 90;
const INSURANCE_RATE_ELECTRIC_CAR = 25;
export class ElectricCar extends Vehicle{
    private batteryRange: number;
    private chargingTime: number;
    constructor(batteryRange?: number, chargingTime?: number){
        super(RENTAL_RATE_ELECTRIC_CAR,INSURANCE_RATE_ELECTRIC_CAR);
        this.batteryRange = batteryRange ?? 350;
        this.chargingTime = chargingTime ?? 1;
    }
    getBatteryRange(): number {
        return this.batteryRange;
    }
    getChargingTime(): number {
        return this.chargingTime;
    }
    getFormatRentalDetails(days: number): string {
        return super.getFormatRentalDetails(days)+`/n Battery Range: ${this.batteryRange} km, Charging Time: ${this.chargingTime} hours`;
    }
}