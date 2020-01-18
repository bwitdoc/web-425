import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2> Here is the e404! Please redirect yourself! </h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      top-margin: 20px;
    }
    h2 {
      color: cyan;
    }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
