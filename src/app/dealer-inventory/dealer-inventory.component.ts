import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

class Vehicle {
  constructor(public VIN: string, public year: string, public make: string, public model: string) {

  }
}

function validate_VIN(control:FormControl) {
  if (control.value.startsWith("V")) {
    return null //All good
  } else {
    return {
      error: "Must start with V"
    }
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

  newVehicleForm:FormGroup
  editVehicleForm:FormGroup

  constructor() { }

  addVehicle() {
    // console.log(this.newVehicleForm)

    let vehicle = this.newVehicleForm.value

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

    //Pre-populate
    this.editVehicleForm.setValue({
      veh_vin: car.VIN,
      veh_year: car.year,
      veh_make: car.make,
      veh_model: car.model,
    })
  }

  updateVehicle() {
    let car = this.editVehicleForm.value

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
    this.newVehicleForm = new FormGroup({
      veh_vin: new FormControl("", [Validators.minLength(4), Validators.required, validate_VIN]),
      veh_year: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      veh_make: new FormControl("", Validators.required),
      veh_model: new FormControl("", Validators.required),
    })

    this.editVehicleForm = new FormGroup({
      veh_vin: new FormControl(),
      veh_year: new FormControl(),
      veh_make: new FormControl(),
      veh_model: new FormControl(),
    })
  }

}
