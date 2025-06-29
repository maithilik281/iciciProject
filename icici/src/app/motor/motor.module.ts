import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeIncComponent } from './bike-inc/bike-inc.component';
import { CarIncComponent } from './car-inc/car-inc.component';



@NgModule({
  declarations: [
    BikeIncComponent,
    CarIncComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MotorModule { }
