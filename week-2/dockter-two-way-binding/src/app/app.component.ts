import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- form -->    
  <div class="container-fluid two-way-form w-50">
    <h2> Two-Way Binding Example </h2>
    <div class="form-group">
      <input class="form-control" type="text"
      placeholder="Enter your name..."
      [{ngModel}]="name">

  <!-- buttons -->
      <button class="btn btn-primary form-control mt-3" (click)="name=''">Clear Name</button>
      </div>

      <div class="form-group">
        <p class="alert-success"> Welcome to two-way-binding, {{name}} </p>
      </div>
    </div>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'Dockter-two-way-binding';

  // name property
  name:string = 'Brittany Dockter';
}
