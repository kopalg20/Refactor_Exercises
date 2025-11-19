import { Vehicle } from "../vehicle";
const RENTAL_RATE_LUXURY_CAR = 150;
const INSURANCE_RATE_LUXURY_CAR = 50;
export class LuxuryCar extends Vehicle{
    constructor(){
        super(RENTAL_RATE_LUXURY_CAR,INSURANCE_RATE_LUXURY_CAR,"luxury car");
    }
}