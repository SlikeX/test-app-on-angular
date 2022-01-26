import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-main',
  templateUrl: './start-main.component.html',
  styleUrls: ['./start-main.component.css']
})
export class StartMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(`Привет, username. Пару слов о своей работе
    Фильтры работают только если выбрать все 3 параметра ( форму, цвет и размер). Если будет возможность, проверь пожалуйста как можно позже, постараюсь успеть доработать. Спасибо
    `)
  }

}
