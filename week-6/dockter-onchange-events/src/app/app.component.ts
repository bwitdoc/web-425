import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myGreeting = 'hi my name is Brittany';
  myUser: { name: string } = { name: 'Brittany'}
}
