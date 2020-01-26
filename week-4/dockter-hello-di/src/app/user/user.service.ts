import { Injectable } from '@angular/core';
import { User } from "./user";

@Injectable()
export class UserService {
  getUser(): User {
    return new User(0, "Brittany", "Dockter", "1000 Truckee St, Truckee, CA 96161");
  }
}

