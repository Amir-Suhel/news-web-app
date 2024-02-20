import { Component, OnInit } from '@angular/core';
import { ArticleResponse } from 'src/app/models/article-response';
import { CurrentUser } from 'src/app/models/currentUser';
import { AuthGuard } from 'src/app/services/auth-guard.guard';
import { AuthService } from 'src/app/services/auth.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  providers: [AuthGuard]
})
export class WishlistComponent implements OnInit {

  favourite: ArticleResponse[] | undefined;
  isEmpty = false;

  constructor(private wishlistService: WishlistService, private authService: AuthService) { }


  ngOnInit(): void {
    let currentUser = new CurrentUser();
    currentUser = this.authService.getCurrentUser();
    const userId = currentUser.userId;
   this.showArticlesByUser(userId);
  }


  // addArticleToWishlist(article: Article) {
  //   this.wishlistService.addArticle(article).subscribe(
  //     (response) => {
  //       console.log(response);
  //       setTimeout(() => {
  //         Swal.fire('Success', 'Article added to wishlist!', 'success');
  //       }, 0); // You can adjust the delay as needed
  //     },
  //     (error) => {
  //       console.log(error);
  //       setTimeout(() => {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Oops...',
  //           text: 'Article is already in the wishlist!',
  //         });
  //       }, 0); // You can adjust the delay as needed
  //     }
  //   );
  // }
  

  showArticlesByUser(userId: number) {
    this.wishlistService.showArticlesByUser(userId).subscribe(
      (response) => {
       // console.log(response);
        this.favourite = response;
        if(this.favourite?.length != 0) {
          this.isEmpty = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );

  }

  removeArticleFromWishlist(userId: number, id: number) {
    this.wishlistService.removeArticleFromWishlist(userId, id).subscribe(
      () => {
        Swal.fire(
          'Success',
          'Article removed successfully!!',
          'success'
        );
        this.showArticlesByUser(userId);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
