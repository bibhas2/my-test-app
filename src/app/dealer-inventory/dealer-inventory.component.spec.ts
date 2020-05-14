import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerInventoryComponent } from './dealer-inventory.component';

describe('DealerInventoryComponent', () => {
  let component: DealerInventoryComponent;
  let fixture: ComponentFixture<DealerInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create successfuly', () => {
    expect(component).toBeTruthy();
  });

  it('Form should be valid', () => {
    component.newVehicleForm.setValue(
      {
        veh_vin: "V000012",
        veh_year: "2018",
        veh_make: "Honda",
        veh_model: "Civic"
      }
    )

    expect(component.newVehicleForm.valid).toBeTruthy();
  });

  it('Should validate VIN', () => {
    component.newVehicleForm.setValue(
      {
        veh_vin: "Y000012",
        veh_year: "2018",
        veh_make: "Honda",
        veh_model: "Civic"
      }
    )

    expect(component.newVehicleForm.valid).toBeFalsy();
  });

  it('Should add vehicle', () => {
    component.newVehicleForm.setValue(
      {
        veh_vin: "V000012",
        veh_year: "2018",
        veh_make: "Honda",
        veh_model: "Civic"
      }
    )

    component.addVehicle() //Simulate button click

    expect(component.inventory.length).toBe(1);
    expect(component.inventory[0].VIN).toBe("V000012");

  });

});
