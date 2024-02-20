package com.newsapp.news.microservice.service;

import com.newsapp.news.microservice.entity.News;

public interface NewsService {

	

//	News getNewsArticle();
//
//	List<Object> getNewsArticleSearch(String query, String pageNo) throws NewsArticleNotFoundException;

	News getNews(String q);

}
