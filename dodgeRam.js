//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Truck extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers =3;
        this.passenger =0;
        this.numberOfWheels =4;
        this.maxSpeed =200;
        this.fuel =10;
        this.scheduleService = true;
    }

    checkService() {
        if (this.mileage > 50000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log('engine has started.');
            return this.started = true
        } else {
            console.log('no fuel');
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger<this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " don't have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }

let myTruck = new Truck('Dodge', 'RAM', '2022', 'Silver', 50000)
    myTruck.start()
    myTruck.loadPassenger(3)
    myTruck.stop()
    myTruck.checkService()
console.log(myTruck)