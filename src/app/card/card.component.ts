import { Component, OnInit } from '@angular/core';
import { ToysService } from '../toys/toys.service';
import { Card } from '../models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public toysList: Card[] = [];
  public searchValue: string = '';

  constructor(
    private toysService: ToysService
  ) { }

  ngOnInit(): void {
    this.toysList = this.toysService.getToysList();
    this.toysService.filterToysList$.subscribe(()=> {
      this.toysList = this.toysService.getToysList();
    })
  }

}
