import { strategyType } from "../strategy-type";
export class StrategyC implements strategyType{
    getMultiplier(): number {
        return 2;
    }
}