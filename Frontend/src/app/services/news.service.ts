import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';
import { NEWS_EXTERNAL, NEWS_URL} from '../models/constants';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // public apiGatewayUrl = 'http://localhost:9090/api/v1/news';
  // public apiUrl = 'http://localhost:8083/api/v1/news/Bitcoin';
  //private keywordUrl= 'http://localhost:8083/api/v1/news';
  //topHeadLinesUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=d4cf13828d12411b9e89bac4ec9fec21';
  //topHeadLinesUrl = 'https://newsapi.org/v2/everything?q=Bitcoin&apiKey=d4cf13828d12411b9e89bac4ec9fec21';

  constructor(private httpClient: HttpClient) { }



  topHeadlines(): Observable<News> {
    // /return this.httpClient.get<News>(NEWS_EXTERNAL);
    return this.httpClient.get<News>(NEWS_EXTERNAL);
    //return this.httpClient.get<News>('https://dic8035w0c.execute-api.us-east-1.amazonaws.com/dev/news/Bitcoin');
  }

  getNewsByKeyword(q: string): Observable<News> {
     return this.httpClient.get<News>(NEWS_URL + '/' + q);
    //return this.httpClient.get<News>('https://dic8035w0c.execute-api.us-east-1.amazonaws.com/dev/news' + '/' + q);
  }

}
