import { CustomerType } from "../customer-type";
export class Regular extends CustomerType{
    constructor(total: number){
        super(total,0);
    }  
}