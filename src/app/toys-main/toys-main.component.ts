import { Component, OnInit } from '@angular/core';
import { ToysService } from '../toys/toys.service';
import { IToysFilterData, ToyColor } from '../toys/toysInterface';

@Component({
  selector: 'app-toys-main',
  templateUrl: './toys-main.component.html',
  styleUrls: ['./toys-main.component.css']
})
export class ToysMainComponent implements OnInit {

  public inputValue = 0;
  public toysList = [];
  public toyColorEnum = ToyColor;


  constructor(
    private toysService: ToysService
  ) { }

  ngOnInit(): void {
    this.toysList = this.toysService.getToysList();
  }

  public changeColor(color: ToyColor) {
    this.toysService.changeColor(color);
  }

}
