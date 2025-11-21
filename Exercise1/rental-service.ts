import { VehicleFactory } from "./vehicle-factory";
import { Vehicle } from "./vehicle";

class RentalService {       
    rentVehicle(type: string, days: number): number {
        const factory = new VehicleFactory();
        const vehicle: Vehicle = factory.create(type);
        const rentalCost = vehicle.getRentalCost(days);
        const insuranceCost = vehicle.getInsuranceCost(days);
        return rentalCost + insuranceCost;       
    }
}
const service = new RentalService();
console.log(service.rentVehicle("car", 5)); // 250
console.log(service.rentVehicle("truck", 3)); // 240
