import { CustomerType } from "../customer-type";
import { StrategyTypeEnum } from "../enum";
import { StrategyA } from "../startegy-types/strategyA";
import { StrategyB } from "../startegy-types/strategyB";
import { StrategyC } from "../startegy-types/startegyC";
const DISCOUNT_RATE = 0.15;
export class Corporate implements CustomerType{
    strategyType: StrategyTypeEnum;
    constructor(startegyType: StrategyTypeEnum){
        this.strategyType = startegyType;
    }
    getDiscountRate(): number {
        switch(this.strategyType){
            case StrategyTypeEnum.Strategy_A:
                return new StrategyA().getMultiplier()*DISCOUNT_RATE;
            case StrategyTypeEnum.Strategy_B:
                return new StrategyB().getMultiplier()*DISCOUNT_RATE;
            case StrategyTypeEnum.Strategy_C:
                return new StrategyC().getMultiplier()*DISCOUNT_RATE;
            default:
                return 0;
        }
    }  
}