import { Car } from "./Vehicles/car";
import { Truck } from "./Vehicles/truck";
import { SUV } from "./Vehicles/suv";
import { Motorcycle } from "./Vehicles/motorcycle";
import { Van } from "./Vehicles/van";
import { LuxuryCar } from "./Vehicles/luxury-car";
import { ElectricCar } from "./Vehicles/electric-car";
import { Vehicle } from "./vehicle";
export class VehicleFactory{
    create(type: string):Vehicle{
        if(type == "car"){
            return new Car();
        } else if(type == "truck"){
            return new Truck();
        } else if(type == "suv"){
            return new SUV();
        } else if(type == "motorcycle"){
            return new Motorcycle();
        } else if(type == "van"){
            return new Van();
        } else if(type == "luxury car"){
            return new LuxuryCar();
        } else if(type == "electric car"){
            return new ElectricCar();
        }
        throw new Error("Unknown vehicle type: " + type);
    }
}