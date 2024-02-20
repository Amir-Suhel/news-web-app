package com.newsapp.news.microservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.newsapp.news.microservice.entity.News;

@Service
public class NewsServiceImpl implements NewsService {

	
	@Autowired
	private RestTemplate restTemplate;

	String API_KEY = "d4cf13828d12411b9e89bac4ec9fec21";

	String url = "https://newsapi.org/v2/everything?";
	String url2 = "url2";




	@Override
	public News getNews(String q) {
		String url1 = url + "q=" + q + "&apiKey=" + API_KEY;
		return restTemplate.getForObject(url1, News.class);
	}

}
