import { Injectable } from '@angular/core';
import { IToysFilterData, ToyColor, ToyShape, ToySize } from './toysInterface';
import { Card } from '../models/Card';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToysService {

  public initialToysList = [
    {
      num: 1,
      name: 'Большой шар с рисунком',
      count: 2,
      year: 1960,
      shape: 'шар',
      color: 'yellow',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/1.png'
    },
    {
      num: 2,
      name: 'Зелёный шар с цветами',
      count: 5,
      year: 2000,
      shape: 'шар',
      color: 'green',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/2.png'
    },
    {
      num: 3,
      name: 'Красный матовый шар',
      count: 3,
      year: 1990,
      shape: 'шар',
      color: 'red',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/3.png'
    },
    {
      num: 4,
      name: 'Сосулька красная',
      count: 2,
      year: 1980,
      shape: 'фигурка',
      color: 'red',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/4.png'
    },
    {
      num: 5,
      name: 'Красный виноград',
      count: 4,
      year: 1980,
      shape: 'фигурка',
      color: 'red',
      size: 'средний',
      favorite: true,
      imgUrl: 'assets/toys/5.png'
    },
    {
      num: 6,
      name: 'Красный шар с рисунком',
      count: 6,
      year: 2010,
      shape: 'шар',
      color: 'red',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/6.png'
    },
    {
      num: 7,
      name: 'Молочно-белый шар',
      count: 12,
      year: 1960,
      shape: 'шар',
      color: 'white',
      size: 'средний',
      favorite: true,
      imgUrl: 'assets/toys/7.png'
    },
    {
      num: 8,
      name: 'Красный шар',
      count: 10,
      year: 2010,
      shape: 'шар',
      color: 'red',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/8.png'
    },
    {
      num: 9,
      name: 'Колокольчик старинный',
      count: 2,
      year: 1950,
      shape: 'колокольчик',
      color: 'white',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/9.png'
    },
    {
      num: 10,
      name: 'Белый шар ретро',
      count: 7,
      year: 1960,
      shape: 'шар',
      color: 'white',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/10.png'
    },
    {
      num: 11,
      name: 'Шишка еловая белая',
      count: 11,
      year: 1960,
      shape: 'шишка',
      color: 'white',
      size: 'малый',
      favorite: false,
      imgUrl: 'assets/toys/11.png'
    },
    {
      num: 12,
      name: 'Белый шар с цветами',
      count: 5,
      year: 1980,
      shape: 'шар',
      color: 'white',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/12.png'
    },
    {
      num: 13,
      name: 'Шар расписной Река',
      count: 3,
      year: 1970,
      shape: 'шар',
      color: 'blue',
      size: 'большой',
      favorite: true,
      imgUrl: 'assets/toys/13.png'
    },
    {
      num: 14,
      name: 'Шар расписной Деревня',
      count: 4,
      year: 1970,
      shape: 'шар',
      color: 'blue',
      size: 'большой',
      favorite: true,
      imgUrl: 'assets/toys/14.png'
    },
    {
      num: 15,
      name: 'Колокольчик расписной',
      count: 3,
      year: 1970,
      shape: 'колокольчик',
      color: 'blue',
      size: 'средний',
      favorite: false,
      imgUrl: 'assets/toys/15.png'
    },
    {
      num: 16,
      name: 'Шишка расписная Пейзаж',
      count: 3,
      year: 1970,
      shape: 'шишка',
      color: 'blue',
      size: 'средний',
      favorite: true,
      imgUrl: 'assets/toys/16.png'
    },
    {
      num: 17,
      name: 'Шишка расписная',
      count: 7,
      year: 1970,
      shape: 'шишка',
      color: 'red',
      size: 'средний',
      favorite: false,
      imgUrl: 'assets/toys/17.png'
    },
    {
      num: 18,
      name: 'Желтый шар с бантом',
      count: 2,
      year: 2010,
      shape: 'шар',
      color: 'yellow',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/18.png'
    },
    {
      num: 19,
      name: 'Желтый шар с паетками',
      count: 12,
      year: 1980,
      shape: 'шар',
      color: 'yellow',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/19.png'
    },
    {
      num: 20,
      name: 'Красный шар с бантом',
      count: 8,
      year: 1950,
      shape: 'шар',
      color: 'red',
      size: 'средний',
      favorite: true,
      imgUrl: 'assets/toys/20.png'
    },
    {
      num: 21,
      name: 'Красный шар с звёздами',
      count: 4,
      year: 1970,
      shape: 'шар',
      color: 'red',
      size: 'большой',
      favorite: true,
      imgUrl: 'assets/toys/21.png'
    },
    {
      num: 22,
      name: 'Шишка еловая золотая',
      count: 11,
      year: 1990,
      shape: 'шишка',
      color: 'yellow',
      size: 'малый',
      favorite: false,
      imgUrl: 'assets/toys/22.png'
    },
    {
      num: 23,
      name: 'Колокольчик старинный',
      count: 9,
      year: 1950,
      shape: 'колокольчик',
      color: 'yellow',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/23.png'
    },
    {
      num: 24,
      name: 'Снежинка изящная',
      count: 1,
      year: 1940,
      shape: 'снежинка',
      color: 'white',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/24.png'
    },
    {
      num: 25,
      name: 'Розовый шар с блёстками',
      count: 12,
      year: 2010,
      shape: 'шар',
      color: 'red',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/25.png'
    },
    {
      num: 26,
      name: 'Рубиново-золотой шар',
      count: 8,
      year: 1960,
      shape: 'шар',
      color: 'yellow',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/26.png'
    },
    {
      num: 27,
      name: 'Красный шар с узором',
      count: 4,
      year: 2010,
      shape: 'шар',
      color: 'red',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/27.png'
    },
    {
      num: 28,
      name: 'Бордовый шар с узором',
      count: 10,
      year: 2010,
      shape: 'шар',
      color: 'red',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/28.png'
    },
    {
      num: 29,
      name: 'Старинный шар с цветами',
      count: 5,
      year: 1950,
      shape: 'шар',
      color: 'yellow',
      size: 'большой',
      favorite: true,
      imgUrl: 'assets/toys/29.png'
    },
    {
      num: 30,
      name: 'Старинный шар с узором',
      count: 8,
      year: 1950,
      shape: 'шар',
      color: 'yellow',
      size: 'большой',
      favorite: true,
      imgUrl: 'assets/toys/30.png'
    },
    {
      num: 31,
      name: 'Красный шар с блёстками',
      count: 8,
      year: 2010,
      shape: 'шар',
      color: 'red',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/31.png'
    },
    {
      num: 32,
      name: 'Синий шар Вселенная',
      count: 11,
      year: 1970,
      shape: 'шар',
      color: 'blue',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/32.png'
    },
    {
      num: 33,
      name: 'Синий шар со снежинкой',
      count: 6,
      year: 2010,
      shape: 'шар',
      color: 'blue',
      size: 'средний',
      favorite: false,
      imgUrl: 'assets/toys/33.png'
    },
    {
      num: 34,
      name: 'Зелёный  шар с узором',
      count: 8,
      year: 2010,
      shape: 'шар',
      color: 'green',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/34.png'
    },
    {
      num: 35,
      name: 'Фигурка Лис в шарфе',
      count: 8,
      year: 1950,
      shape: 'фигурка',
      color: 'yellow',
      size: 'средний',
      favorite: true,
      imgUrl: 'assets/toys/35.png'
    },
    {
      num: 36,
      name: 'Сиреневый шар Метель',
      count: 1,
      year: 2000,
      shape: 'шар',
      color: 'blue',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/36.png'
    },
    {
      num: 37,
      name: 'Зелёный  шар Метель',
      count: 6,
      year: 2000,
      shape: 'шар',
      color: 'green',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/37.png'
    },
    {
      num: 38,
      name: 'Голубой  шар Метель',
      count: 6,
      year: 2000,
      shape: 'шар',
      color: 'blue',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/38.png'
    },
    {
      num: 39,
      name: 'Красная снежинка',
      count: 6,
      year: 1990,
      shape: 'снежинка',
      color: 'red',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/39.png'
    },
    {
      num: 40,
      name: 'Снежинка золотая',
      count: 12,
      year: 2020,
      shape: 'снежинка',
      color: 'yellow',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/40.png'
    },
    {
      num: 41,
      name: 'Снежинка арктическая',
      count: 11,
      year: 2020,
      shape: 'снежинка',
      color: 'white',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/41.png'
    },
    {
      num: 42,
      name: 'Зелёный шар',
      count: 10,
      year: 1980,
      shape: 'шар',
      color: 'green',
      size: 'средний',
      favorite: false,
      imgUrl: 'assets/toys/42.png'
    },
    {
      num: 43,
      name: 'Снежинка двухцветная',
      count: 6,
      year: 1960,
      shape: 'снежинка',
      color: 'red',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/43.png'
    },
    {
      num: 44,
      name: 'Фигурка Ангела',
      count: 11,
      year: 1940,
      shape: 'фигурка',
      color: 'red',
      size: 'средний',
      favorite: true,
      imgUrl: 'assets/toys/44.png'
    },
    {
      num: 45,
      name: 'Снежинка новогодняя',
      count: 1,
      year: 1980,
      shape: 'снежинка',
      color: 'white',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/45.png'
    },
    {
      num: 46,
      name: 'Фигурка Мухомор',
      count: 10,
      year: 1950,
      shape: 'фигурка',
      color: 'red',
      size: 'малый',
      favorite: false,
      imgUrl: 'assets/toys/46.png'
    },
    {
      num: 47,
      name: 'Фигурка Колодец',
      count: 6,
      year: 1950,
      shape: 'фигурка',
      color: 'red',
      size: 'малый',
      favorite: false,
      imgUrl: 'assets/toys/47.png'
    },
    {
      num: 48,
      name: 'Желтый шар с бантом',
      count: 6,
      year: 1960,
      shape: 'шар',
      color: 'yellow',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/48.png'
    },
    {
      num: 49,
      name: 'Снежинка с бирюзой',
      count: 4,
      year: 1980,
      shape: 'снежинка',
      color: 'yellow',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/49.png'
    },
    {
      num: 50,
      name: 'Колокольчик большой',
      count: 3,
      year: 2020,
      shape: 'колокольчик',
      color: 'red',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/50.png'
    },
    {
      num: 51,
      name: 'Шишка с изморозью',
      count: 12,
      year: 1970,
      shape: 'шишка',
      color: 'red',
      size: 'малый',
      favorite: false,
      imgUrl: 'assets/toys/51.png'
    },
    {
      num: 52,
      name: 'Красный шар с надписью',
      count: 12,
      year: 1990,
      shape: 'шар',
      color: 'red',
      size: 'большой',
      favorite: true,
      imgUrl: 'assets/toys/52.png'
    },
    {
      num: 53,
      name: 'Снежинка серебристая',
      count: 6,
      year: 2020,
      shape: 'снежинка',
      color: 'white',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/53.png'
    },
    {
      num: 54,
      name: 'Зелёный шар с рисунком',
      count: 6,
      year: 2010,
      shape: 'шар',
      color: 'green',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/54.png'
    },
    {
      num: 55,
      name: 'Пряничный домик',
      count: 1,
      year: 1940,
      shape: 'фигурка',
      color: 'yellow',
      size: 'большой',
      favorite: false,
      imgUrl: 'assets/toys/55.png'
    },
    {
      num: 56,
      name: 'Пряничный теремок',
      count: 1,
      year: 1940,
      shape: 'фигурка',
      color: 'yellow',
      size: 'малый',
      favorite: false,
      imgUrl: 'assets/toys/56.png'
    },
    {
      num: 57,
      name: 'Пряничная избушка',
      count: 1,
      year: 1940,
      shape: 'фигурка',
      color: 'yellow',
      size: 'средний',
      favorite: false,
      imgUrl: 'assets/toys/57.png'
    },
    {
      num: 58,
      name: 'Фигурка белого медведя',
      count: 2,
      year: 1980,
      shape: 'фигурка',
      color: 'white',
      size: 'средний',
      favorite: false,
      imgUrl: 'assets/toys/58.png'
    },
    {
      num: 59,
      name: 'Желтый шар с надписью',
      count: 10,
      year: 1990,
      shape: 'шар',
      color: 'yellow',
      size: 'средний',
      favorite: false,
      imgUrl: 'assets/toys/59.png'
    },
    {
      num: 60,
      name: 'Фигурка Голубь',
      count: 12,
      year: 1940,
      shape: 'фигурка',
      color: 'white',
      size: 'средний',
      favorite: true,
      imgUrl: 'assets/toys/60.png'
    }
  ];
  public toysList: Card[] = this.initialToysList.slice();

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

  public filterToysList$ = new Subject<void>();

  constructor() { }

  public getToysList() {
    return this.toysList
  }

  public filterToysList(data: IToysFilterData, color: ToyColor): void {
    const includedColors = Object.keys(data.color).filter( item=> data.color[item] );
    console.log(includedColors)
    let arr = this.initialToysList.slice();
    this.initialToysList.forEach(toy => {
      arr = arr.filter(toy => includedColors.some( color => toy.color === color))
    })
    this.toysList = arr;
    console.log(this.toysList)
    this.filterToysList$.next()
  }


  public changeColor( color: ToyColor ) {
    this.toysFilterData.color[color] = !this.toysFilterData.color[color];
    // console.log(this.toysFilterData.color)
    this.filterToysList(this.toysFilterData,color)
    console.log(this.toysList)
  }

  public changeShape( shape: ToyShape ) {
    this.toysFilterData.shape[shape] = !this.toysFilterData.shape[shape];
    console.log(this.toysFilterData)
  }

  public changeSize( size: ToySize ) {
    this.toysFilterData.size[size] = !this.toysFilterData.size[size];
    console.log(this.toysFilterData)
  }

}
