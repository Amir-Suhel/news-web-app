package com.newsapp.news.microservice.exception;

public class NewsArticleNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NewsArticleNotFoundException(String message) {
		super(message);
	}
}
