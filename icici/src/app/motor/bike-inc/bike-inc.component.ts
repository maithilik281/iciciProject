import { Component } from '@angular/core';

@Component({
  selector: 'app-bike-inc',
  templateUrl: './bike-inc.component.html',
  styleUrls: ['./bike-inc.component.css']
})
export class BikeIncComponent {
  public getCarDetails:any;
  getMoreBikeDetails(){
    return undefined;
  }
   getBikeDetails(){
    return "hello";
  }
}
