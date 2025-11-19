import { strategyType } from "../strategy-type";
export class StrategyA implements strategyType{
    getMultiplier(): number {
        return 1;
    }
}