import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(private userServiceService: UserServiceService) {}

  ngOnInit(): void {
    this.currentUser = this.userServiceService.currentUser;
    console.log(this.currentUser);
    this.userServiceService.currentUserEvent.subscribe((user) => {
      this.currentUser = user;
    });
  }
}
