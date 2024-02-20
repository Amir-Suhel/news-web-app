import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  topHeadLinesData: Article[] | undefined;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.topHeadlines().subscribe(
      (response) => {
        this.topHeadLinesData = response.articles;
        this.topHeadLinesData = this.topHeadLinesData?.filter((article) => article.urlToImage != null && article.urlToImage != '');
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
