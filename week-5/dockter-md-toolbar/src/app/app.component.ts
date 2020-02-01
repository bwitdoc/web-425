import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .menu {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
      color: white;
    }

    .wrapper {
      padding: 70px 70px 0;
      display: block;
    }
  `]
})
export class AppComponent {
  title = 'dockter-md-toolbar';
}
