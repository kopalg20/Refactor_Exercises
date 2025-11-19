import { CustomerType } from "../customer-type";
export class Corporate extends CustomerType{
    constructor(total: number){
        super(total,0.15);
    }  
}