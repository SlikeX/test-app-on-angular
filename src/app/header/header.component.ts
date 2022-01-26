import { Component } from '@angular/core';
import { ToysService } from '../toys/toys.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  public searchValue: string = '';

  constructor(
    private toysService: ToysService
  ) { }

  public searchToys ( searchValue: string) {
    this.toysService.searchToys( searchValue );
  }

}
