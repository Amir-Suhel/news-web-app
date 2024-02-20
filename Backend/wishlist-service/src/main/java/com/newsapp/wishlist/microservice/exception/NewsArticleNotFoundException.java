package com.newsapp.wishlist.microservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "News Article is not found")
public class NewsArticleNotFoundException extends Exception {

}
