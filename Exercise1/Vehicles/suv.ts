import { Vehicle } from "../vehicle";
const RENTAL_RATE_SUV = 65;
const INSURANCE_RATE_SUV = 15;
export class SUV extends Vehicle{
    constructor(){
        super(RENTAL_RATE_SUV,INSURANCE_RATE_SUV,"suv");
    }
}