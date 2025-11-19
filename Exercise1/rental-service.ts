import { Car } from "./Vehicles/car";
import { Truck } from "./Vehicles/truck";
import { SUV } from "./Vehicles/suv";
import { Motorcycle } from "./Vehicles/motorcycle";
import { Van } from "./Vehicles/van";
import { LuxuryCar } from "./Vehicles/luxury-car";
import { ElectricCar } from "./Vehicles/electric-car";

class RentalService {
    rentVehicle(type: string, days: number): number {
        if (type === "car") {;
            return new Car().getRentalCost(days);
        } else if (type === "truck") {
            return new Truck().getRentalCost(days);
        } else if (type === "suv") {
            return new SUV().getRentalCost(days);
        } else if (type === "motorcycle") {
            return new Motorcycle().getRentalCost(days);
        }else if (type === "van") {
            return new Van().getRentalCost(days);
        }else if (type === "luxury car") {
            return new LuxuryCar().getRentalCost(days);
        }else if (type === "electric car") {
            return new ElectricCar().getRentalCost(days);
        }
        return 0;
    }
}
const service = new RentalService();
console.log(service.rentVehicle("car", 5)); // 250
console.log(service.rentVehicle("truck", 3)); // 240