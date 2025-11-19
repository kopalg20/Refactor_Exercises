class RentalService {
    rentVehicle(type: string, days: number): number {
        if (type === "car") {
            const rate = 50;
            return rate * days;
        } else if (type === "truck") {
            const rate = 80;
            return rate * days;
        } else if (type === "suv") {
            const rate = 65;
            return rate * days;
        } else if (type === "motorcycle") {
            const rate = 30;
            return rate * days;
        }
        return 0;
    }
}
const service = new RentalService();
console.log(service.rentVehicle("car", 5)); // 250
console.log(service.rentVehicle("truck", 3)); // 240