import { RentalService } from "../Exercise1/rental-service";

describe("RentalService", () => {

    const service = new RentalService();

    test("calculates total for car correctly", () => {
        const total = service.rentVehicle("car", 5);
        expect(total).toBe(300);
    });

    test("calculates total for truck correctly", () => {
        const total = service.rentVehicle("truck", 3);
        expect(total).toBe(300);
    });

    test("calculates total for suv correctly", () => {
        const total = service.rentVehicle("suv", 4);
        expect(total).toBe(320);
    });

    test("calculates total for motorcycle correctly", () => {
        const total = service.rentVehicle("motorcycle", 6);
        expect(total).toBe(210);
    });

    test("calculates total for van correctly", () => {
        const total = service.rentVehicle("van", 2);
        expect(total).toBe(176);
    });

    test("calculates total for electric car correctly", () => {
        const total = service.rentVehicle("electric car", 3);
        expect(total).toBe(345);
    });

    test("calculates total for luxury car correctly", () => {
        const total = service.rentVehicle("luxury car", 1);
        expect(total).toBe(200);
    });

    test("throws error on invalid type", () => {
        expect(() => service.rentVehicle("plane" as any, 2))
            .toThrow("Unknown vehicle type");
    });

    test("throw error on negative days", () => {
        expect(() => service.rentVehicle("car", -3))
            .toThrow("Days cannot be negative");
    });
});
