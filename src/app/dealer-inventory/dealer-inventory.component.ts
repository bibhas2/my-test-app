import { Component, OnInit } from '@angular/core';

class Vehicle {
  constructor(public VIN: string, public year: string, public make: string, public model: string) {

  }
}

@Component({
  selector: 'app-dealer-inventory',
  templateUrl: './dealer-inventory.component.html',
  styleUrls: ['./dealer-inventory.component.css']
})
export class DealerInventoryComponent implements OnInit {
  inventory:Vehicle[] = []
  vehicleToEdit:Vehicle = undefined
  manufacturerList = [
    {
      code: "HON",
      name: "Honda"
    },
    {
      code: "BMW",
      name: "BMW"
    },
    {
      code: "MER",
      name: "Mercedes"
    },
    {
      code: "KIA",
      name: "Kia"
    },
    {
      code: "HYU",
      name: "Hyundai"
    },
  ]

  constructor() { }

  addVehicle(vehicle:any) {
    console.log(vehicle)

    let newVehicle = new Vehicle(
      vehicle.veh_vin,
      vehicle.veh_year,
      vehicle.veh_make,
      vehicle.veh_model,
    )

    this.inventory.push(newVehicle)

  }

  deleteVehicle(carToDelete:Vehicle) {
    this.inventory = this.inventory.filter(c => c.VIN != carToDelete.VIN)
  }

  editVehicle(car:Vehicle) {
    this.vehicleToEdit = car
  }

  updateVehicle(car:any) {
    this.vehicleToEdit.VIN = car.veh_vin
    this.vehicleToEdit.year = car.veh_year
    this.vehicleToEdit.make = car.veh_make
    this.vehicleToEdit.model = car.veh_model

    this.vehicleToEdit = undefined
  }

  cancelEdit() {
    this.vehicleToEdit = undefined
  }

  trackByVIN(index:number, car:Vehicle) : string {
    return car.VIN
  }

  ngOnInit(): void {
  }

}
