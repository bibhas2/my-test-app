import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';
import {HttpClientModule} from '@angular/common/http';
import { StateDataDisplayComponent } from './state-data-display/state-data-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DealerInventoryComponent,
    StateDataDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
