import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1> Hello and welcome to my home page! </h1>
  `,
  styles: [`
    h1 {
      color: pink;
    }

  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
