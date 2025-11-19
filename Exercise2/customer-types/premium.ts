import { CustomerType } from "../customer-type";
export class Premium extends CustomerType{
    constructor(total: number){
        super(total,0.1);
    }  
}