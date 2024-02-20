import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user = new User();

  constructor(private userService: UserService, private router: Router) { }

  // ngOnInit(): void {
  // }

  isValidEmail(): boolean {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.user.email);
  }

  isFormValid(): boolean {
    // Validate the form based on your requirements
    return (
      !!this.user.username &&
      !!this.user.fullName &&
      this.isValidEmail() &&
      !!this.user.password && this.user.password.length >= 6 && this.user.password.length <= 10
    );
  }

  signUp() {
    //console.log(this.user);
    if (this.isFormValid()) {
      this.userService.signUp(this.user).subscribe(
        (response) => {
          // console.log(response);
          Swal.fire(
            'Success',
            'You have registered successfully',
            'success'
          );
          this.router.navigate(['login']);
        },
        (error: HttpErrorResponse) => {
          //console.log(error);
          if (error.status == 409) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'User with this username already registered!'
            });
            return;
          }
          //this.snack.open("Something went wrong!!",  'ok');
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          });
          return;
        }
      )
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Add all the fields accordingly!!'
      });
      return;
    }

  }

}
