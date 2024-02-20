package com.newsapp.wishlist.microservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.newsapp.wishlist.microservice.entity.FavouriteArticle;

public interface FavouriteArticleRepository extends JpaRepository<FavouriteArticle, Long> {
	
	List<FavouriteArticle> findAllByUserId(Long userId);
	FavouriteArticle findByUserIdAndTitle(Long userId, String title);
	FavouriteArticle findByUserIdAndId(Long userId, Long id);

}
