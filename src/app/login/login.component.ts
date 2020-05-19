import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { AuthServiceService } from '../services/auth-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginResponse } from '../model/LoginResponse';
import { UserServiceService } from '../services/user-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  currentUser: User;
  token: string;
  error: string;
  isLoading = false;
  constructor(
    private authServiceService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private userServiceService: UserServiceService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {}
  onLoginSubmit(loginData: NgForm) {
    this.error = null;
    // this.isLoading = true;
    this.spinnerService.show();
    let loginFormdata: any = {
      email: loginData.value.email,
      password: loginData.value.password,
    };
    this.authServiceService.login(loginFormdata).subscribe(
      (loginResponse: LoginResponse) => {
        console.log('loginResponse.user ' + loginResponse.user);

        this.currentUser = loginResponse.user;
        this.token = loginResponse.token;
        this.userServiceService.currentUser = loginResponse.user;
        this.userServiceService.currentUserEvent.emit(loginResponse.user);
        this.userServiceService.currentAuthToken = loginResponse.token;
        // this.isLoading = false;
        this.spinnerService.hide();
        if (loginResponse.user) {
          this.router.navigate(['/']);
        }
      },
      (error) => {
        // this.isLoading = false;
        this.spinnerService.hide();
        console.log(error);
        this.error = error.error.message;
        // this.error = error.statusText;
      }
    );
  }

  onHandleError() {
    this.error = null;
  }
}
