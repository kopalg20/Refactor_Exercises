import { Vehicle } from "../vehicle";
const RENTAL_RATE_TRUCK = 80;
const INSURANCE_RATE_TRUCK = 20;
export class Truck extends Vehicle{
    private payloadCapacity: number;
    private hasFourWheelDrive: boolean;
    constructor(payloadCapacity?: number,hasFourWheelDrive?: boolean){
        super(RENTAL_RATE_TRUCK,INSURANCE_RATE_TRUCK);
        this.payloadCapacity = payloadCapacity ?? 3000;
        this.hasFourWheelDrive = hasFourWheelDrive ?? true;
    }
    getPayloadCapacity(): number {
        return this.payloadCapacity;
    }
    isFourWheelDrive(): boolean {
        return this.hasFourWheelDrive;
    }
    getFormatRentalDetails(days: number): string {
        return super.getFormatRentalDetails(days)+"/n Payload Capacity: ${this.payloadCapacity} kg, Four Wheel Drive: ${this.hasFourWheelDrive}";
    }
}