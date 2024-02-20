package com.newsapp.news.microservice.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.newsapp.news.microservice.entity.News;
import com.newsapp.news.microservice.service.NewsService;

@RestController
@RequestMapping("/api/v1/news")
@CrossOrigin("*")
public class NewsController {

	private static final Logger logger = LoggerFactory.getLogger(NewsController.class);

	@Autowired
	private NewsService newsService;

	@GetMapping("/{q}")
	public News getNews(@PathVariable String q) {
		logger.info(String.format("get api is calling........"));
		return newsService.getNews(q);
	}

}
