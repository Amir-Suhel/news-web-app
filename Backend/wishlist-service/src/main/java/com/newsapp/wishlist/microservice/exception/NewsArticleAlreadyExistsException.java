package com.newsapp.wishlist.microservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(code = HttpStatus.CONFLICT, reason = "News Article Id Exception raised- handled by custom exception")
public class NewsArticleAlreadyExistsException extends Exception {

}
