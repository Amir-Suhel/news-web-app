package com.newsapp.wishlist.microservice.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.newsapp.wishlist.microservice.entity.FavouriteArticle;
import com.newsapp.wishlist.microservice.exception.NewsArticleAlreadyExistsException;
import com.newsapp.wishlist.microservice.exception.NewsArticleNotFoundException;
import com.newsapp.wishlist.microservice.repository.FavouriteArticleRepository;

@Service
public class FavouriteArticleServiceImpl implements FavouriteArticleService {

	private static final Logger logger = LoggerFactory.getLogger(FavouriteArticleServiceImpl.class);

	@Autowired
	private FavouriteArticleRepository favouriteArticleRepository;

	@Override
	public FavouriteArticle saveArticle(FavouriteArticle favouriteArticle) throws NewsArticleAlreadyExistsException {

		logger.info(String.format("Saved Article is: %s", favouriteArticle.toString()));

//		if (favouriteArticleRepository.existsById(favouriteArticle.getId())) {
//			throw new NewsArticleAlreadyExistsException();
//		}
//
//		return favouriteArticleRepository.save(favouriteArticle)
		FavouriteArticle article =  favouriteArticleRepository.findByUserIdAndTitle(favouriteArticle.getUserId(), favouriteArticle.getTitle());
		if(article != null) {
			throw new NewsArticleAlreadyExistsException();
		}
		return favouriteArticleRepository.save(favouriteArticle);
	}

	@Override
	public List<FavouriteArticle> getArticles() {
		return favouriteArticleRepository.findAll();
	}

	@Override
	public FavouriteArticle deleteArticleById(Long id) throws NewsArticleNotFoundException {
		Optional<FavouriteArticle> optionalArticle = favouriteArticleRepository.findById(id);
		if (optionalArticle.isEmpty()) {
			throw new NewsArticleNotFoundException();
		}
		favouriteArticleRepository.deleteById(id);
		return optionalArticle.get();
	}



	@Override
	public List<FavouriteArticle> getArticlesByUserId(Long userId) {
		return favouriteArticleRepository.findAllByUserId(userId);

	}

	@Override
	public FavouriteArticle deleteArticleByUserIdAndId(Long userId, Long id) throws NewsArticleNotFoundException {
		FavouriteArticle favouriteArticle = favouriteArticleRepository.findByUserIdAndId(userId, id);
		if(favouriteArticle == null) {
			throw new NewsArticleNotFoundException();
		}
		favouriteArticleRepository.delete(favouriteArticle);
		return favouriteArticle;
	}


}
