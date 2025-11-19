import { CustomerType } from "../customer-type";
export class Weekend extends CustomerType{
    constructor(total: number){
        super(total,-0.25);
    }  
}