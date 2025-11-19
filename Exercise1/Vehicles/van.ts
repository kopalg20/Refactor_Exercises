import { Vehicle } from "../vehicle";
const RENTAL_RATE_VAN = 70;
const INSURANCE_RATE_VAN = 18;
export class Van extends Vehicle{
    constructor(){
        super(RENTAL_RATE_VAN,INSURANCE_RATE_VAN);
    }
}