
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/models/currentUser';
import { SignInRequest } from 'src/app/models/sign-in-request';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUser: SignInRequest = new SignInRequest();
  currentUser: CurrentUser = new CurrentUser();

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }


  // ngOnInit(): void {
  // }

  signIn() {
    return this.userService.signIn(this.loginUser).subscribe(
      (response) => {
        //console.log(response);
        //console.log(response.token);
        this.currentUser.userId = +response.userId;
        this.currentUser.username = response.username;
        this.currentUser.message = response.message;
        this.currentUser.token = response.token;
        this.authService.setCurrentUser(this.currentUser);
        this.authService.setToken(response.token);
        Swal.fire(
          'Success',
          'Logged In  successfully',
          'success'
        );
        this.router.navigateByUrl('');
      },
      (error) => {
        //console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        });
      }
    );
  }

}