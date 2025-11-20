import { Car } from "./Vehicles/car";
import { Truck } from "./Vehicles/truck";
import { SUV } from "./Vehicles/suv";
import { Motorcycle } from "./Vehicles/motorcycle";
import { Van } from "./Vehicles/van";
import { LuxuryCar } from "./Vehicles/luxury-car";
import { ElectricCar } from "./Vehicles/electric-car";
import { VehicleTypeEnum } from "./enum";

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
        if (type === VehicleTypeEnum.CAR) {
            // console.log(this.car.getFormatRentalDetails(days));
            return this.car.getRentalCost(days);
        } else if (type === VehicleTypeEnum.TRUCK) {
            return this.truck.getRentalCost(days);
        } else if (type === VehicleTypeEnum.SUV) {
            return this.suv.getRentalCost(days);
        } else if (type === VehicleTypeEnum.MOTORCYCLE) {
            return this.motorcycle.getRentalCost(days);
        }else if (type === VehicleTypeEnum.VAN) {
            return this.van.getRentalCost(days);
        }else if (type === VehicleTypeEnum.LUXURY_CAR) {
            return this.luxuryCar.getRentalCost(days);
        }else if (type === VehicleTypeEnum.ELECTRIC_CAR) {
            return this.electricCar.getRentalCost(days);
        }
        return 0;
    }
}
const service = new RentalService();
console.log(service.rentVehicle("car", 5)); // 250
console.log(service.rentVehicle("truck", 3)); // 240
