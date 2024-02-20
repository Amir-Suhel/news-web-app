import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleResponse } from 'src/app/models/article-response';
import { CurrentUser } from 'src/app/models/currentUser';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  articleResponse = new ArticleResponse();

  topHeadLinesData: Article[] | undefined ;

  constructor(private newsService: NewsService, 
    private wishlistService: WishlistService,
    private authService: AuthService,
    private router: ActivatedRoute) { }

    ngOnInit(): void {
      this.router.params.subscribe(params => {
        const keyword = params['keyword'];
        if (keyword) {
          // If there is a keyword in the route parameters, fetch news by keyword
          this.getNewsByKeyword(keyword);
        } else {
          // Otherwise, fetch top headlines
          this.getTopHeadLinesNews();
        }
      });
    }
  
    getNewsByKeyword(keyword: string) {
      this.newsService.getNewsByKeyword(keyword).subscribe(
        (response) => {
          this.topHeadLinesData = response.articles;
          this.topHeadLinesData = this.topHeadLinesData?.filter((article) => article.urlToImage != null && article.urlToImage != '');
        },
        (error) => {
          console.log(error);
        }
      );
    }


  searchValue = '';

  clearSearch(): void {
    this.searchValue = '';
  }

  getTopHeadLinesNews() {
    this.newsService.topHeadlines().subscribe(
      (response) => {
       // console.log(response.articles);
        this.topHeadLinesData = response.articles;
        this.topHeadLinesData = this.topHeadLinesData?.filter((article) => article.urlToImage != null && article.urlToImage != '');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addToWishlist(articleData: Article) {
    let currentUser = new CurrentUser();
    currentUser = this.authService.getCurrentUser();
    this.articleResponse.userId = currentUser.userId;
    this.articleResponse.author=articleData.author;
    this.articleResponse.title=articleData.title;
    this.articleResponse.description=articleData.description;
    this.articleResponse.url=articleData.url;
    this.articleResponse.urlToImage=articleData.urlToImage;
    this.articleResponse.publishedAt=articleData.publishedAt;
    this.articleResponse.content=articleData.content;

    this.wishlistService.addArticle(this.articleResponse).subscribe(
      (response) => {
        console.log(response);
        Swal.fire(
          'Success',
          'Article added to wishlist!',
          'success'
        );
      },
      (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Article is already in the wishlist!',
        });
      }
    );
  }



}
