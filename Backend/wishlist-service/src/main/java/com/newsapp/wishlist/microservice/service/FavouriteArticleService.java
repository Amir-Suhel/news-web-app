package com.newsapp.wishlist.microservice.service;

import java.util.List;

import com.newsapp.wishlist.microservice.entity.FavouriteArticle;
import com.newsapp.wishlist.microservice.exception.NewsArticleAlreadyExistsException;
import com.newsapp.wishlist.microservice.exception.NewsArticleNotFoundException;

public interface FavouriteArticleService {

	FavouriteArticle saveArticle(FavouriteArticle favouriteArticle) throws NewsArticleAlreadyExistsException;

	List<FavouriteArticle> getArticles();

	List<FavouriteArticle> getArticlesByUserId(Long userId);

	FavouriteArticle deleteArticleByUserIdAndId(Long userId, Long id) throws NewsArticleNotFoundException;

	FavouriteArticle deleteArticleById(Long id) throws NewsArticleNotFoundException;


}
