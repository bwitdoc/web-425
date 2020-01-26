import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  
  users: Observable<User[]>;
  title = 'app';

  constructor(private userService: UserService) {}

  ngOnInIt() {
    this.users = this.userService.getUsers();
  }
}
