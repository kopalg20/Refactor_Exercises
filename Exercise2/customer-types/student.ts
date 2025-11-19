import { CustomerType } from "../customer-type";
export class Student extends CustomerType{
    constructor(total: number){
        super(total,0.2);
    }  
}