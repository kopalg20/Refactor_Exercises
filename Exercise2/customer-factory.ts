import { Regular } from "./customer-types/regular";
import { Premium } from "./customer-types/premium";
import { Corporate } from "./customer-types/corporate";
import { Student } from "./customer-types/student";
import { Weekend } from "./customer-types/weekend";
import { CustomerType } from "./customer-type";
import { StrategyTypeEnum } from "./enum";
export class CustomerFactory{
    create(type: string,startegy: StrategyTypeEnum): CustomerType{
        if(type == "regular"){
            return new Regular(startegy);
        } else if(type == "premium"){
            return new Premium(startegy);
        } else if(type == "corporate"){
            return new Corporate(startegy);
        } else if(type == "student"){
            return new Student(startegy);
        } else if(type == "weekend"){
            return new Weekend(startegy);
        }
        throw new Error("Unknown customer type: " + type);
    }
}                               