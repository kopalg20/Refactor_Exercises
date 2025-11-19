import { Car } from "./Vehicles/car";
import { Truck } from "./Vehicles/truck";
import { SUV } from "./Vehicles/suv";
import { Motorcycle } from "./Vehicles/motorcycle";
import { Van } from "./Vehicles/van";
import { LuxuryCar } from "./Vehicles/luxury-car";
import { ElectricCar } from "./Vehicles/electric-car";

class RentalService {
    car : Car;
    truck : Truck;
    suv : SUV;
    motorcycle : Motorcycle;
    van : Van;
    luxuryCar : LuxuryCar;
    electricCar : ElectricCar;
    constructor(){
        this.car = new Car();
        this.truck = new Truck();
        this.suv = new SUV();
        this.motorcycle = new Motorcycle();
        this.van = new Van();
        this.luxuryCar = new LuxuryCar();
        this.electricCar = new ElectricCar();
    }       
    rentVehicle(type: string, days: number): number {
        if (type === "car") {;
            return this.car.getRentalCost(days);
        } else if (type === "truck") {
            return this.truck.getRentalCost(days);
        } else if (type === "suv") {
            return this.suv.getRentalCost(days);
        } else if (type === "motorcycle") {
            return this.motorcycle.getRentalCost(days);
        }else if (type === "van") {
            return this.van.getRentalCost(days);
        }else if (type === "luxury car") {
            return this.luxuryCar.getRentalCost(days);
        }else if (type === "electric car") {
            return this.electricCar.getRentalCost(days);
        }
        return 0;
    }
}
const service = new RentalService();
console.log(service.rentVehicle("car", 5)); // 250
console.log(service.rentVehicle("truck", 3)); // 240