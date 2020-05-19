import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  currentUser: User;
  currentUserEvent = new EventEmitter<User>();
  currentAuthToken: string;
  constructor() {}
}
