import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  

  constructor(private authService: AuthService, private router: Router) { }

  // ngOnInit(): void {
  // }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    return this.authService.logout();
  }

  getNewsByKeyWord(keyword: string) {
    // Navigate to the NewsComponent with the keyword as a route parameter
    this.router.navigate(['/news', keyword]);
  }


  
}
