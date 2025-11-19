import { Vehicle } from "../vehicle";
const RENTAL_RATE_MOTORCYCLE = 30;
const INSURANCE_RATE_MOTORCYCLE = 5;
export class Motorcycle extends Vehicle{
    constructor(){
        super(RENTAL_RATE_MOTORCYCLE,INSURANCE_RATE_MOTORCYCLE);
    }
}