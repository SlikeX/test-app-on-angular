import { Injectable } from '@angular/core';
import { IToysFilterData, ToyColor, ToyShape } from './toysInterface';

@Injectable({
  providedIn: 'root'
})
export class ToysService {

  public toysList = [];

  private toysFilterData: IToysFilterData = {
    amount: 0,
    purchaseYear: 1990,
    shape: {
      ball: false,
      figure: false,
      bell: false,
      cone: false,
      snowflake: false
    },
    color: {
      white: false,
      red: false,
      blue: false,
      green: false,
      yellow: false
    },
    size: {
      big: false,
      medium: false,
      small: false
    },
    onlyFavourites: false
  };

  constructor() { }

  public getToysList() {
    return this.toysList;
  }

  public filterToysList(): void {
    
  }

  public changeColor( color: ToyColor ) {
    this.toysFilterData.color[color] = !this.toysFilterData.color[color];
    console.log(this.toysFilterData)
  }

}
