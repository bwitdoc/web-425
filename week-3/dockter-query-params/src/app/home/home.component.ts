import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2> Thanks for viewing my home page! </h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      top-margin: 20px;
    }
    h2 {
      color: steelblue;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
