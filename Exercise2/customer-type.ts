export class CustomerType{
    total: number;
    discountRate: number;
    constructor(total: number, discountRate: number){
        this.total = total;
        this.discountRate = discountRate;
    }
    getPrice(): number {
        return this.total * (1 - this.discountRate);
    }
}