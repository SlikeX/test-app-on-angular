import { Component, OnInit, OnChanges} from '@angular/core';
import { ToysService } from '../toys/toys.service';
import { IToysFilterData, ToyColor, ToyShape, ToySize } from '../toys/toysInterface';
import { Card } from '../models/Card';

@Component({
  selector: 'app-toys-main',
  templateUrl: './toys-main.component.html',
  styleUrls: ['./toys-main.component.css']
})
export class ToysMainComponent implements OnInit {

  public inputValue = 0;
  public toysList: Card[] = [];
  public toyShapeEnum = ToyShape;
  public toySizeEnum = ToySize;


  constructor(
    private toysService: ToysService
  ) { }

  ngOnInit(): void {
    this.toysList = this.toysService.getToysList();
  }

  public changeColor(color: ToyColor) {
    this.toysService.changeColor(color);
  }

  public changeShape(shape: ToyShape) {
    this.toysService.changeShape(shape);
  }

  public changeSize(size: ToySize) {
    this.toysService.changeSize(size);
  }
}
