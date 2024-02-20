import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleResponse } from '../models/article-response';
import { Observable } from 'rxjs';
import { WISHLIST_ADD_URL, WISHLIST_DELETE_URL, WISHLIST_GET_URL } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  // private addUrl = 'http://localhost:8084/api/v1/articles/add';
  // private getUrl = 'http://localhost:8084/api/v1/articles/userId';
  // private deleteUrl = 'http://localhost:8084/api/v1/articles/userId';

  constructor(private httpClient: HttpClient) { }

  addArticle(article: ArticleResponse) {
     return this.httpClient.post(WISHLIST_ADD_URL, article);
    //return this.httpClient.post('https://dic8035w0c.execute-api.us-east-1.amazonaws.com/dev/wishlist', article);
  }

  showArticlesByUser(userId: number): Observable<ArticleResponse[]> {
    return this.httpClient.get<ArticleResponse[]>(WISHLIST_GET_URL +'/' + userId);
    //return this.httpClient.get<ArticleResponse[]>('https://dic8035w0c.execute-api.us-east-1.amazonaws.com/dev/wishlist' + '/' + userId);

  }

  removeArticleFromWishlist(userId: number, id: number) {
    return this.httpClient.delete(WISHLIST_DELETE_URL + '/' + userId + '/id/' + id);
    //return this.httpClient.delete('https://dic8035w0c.execute-api.us-east-1.amazonaws.com/dev/wishlist' + '/' + userId + '/' + id);
  }
}
