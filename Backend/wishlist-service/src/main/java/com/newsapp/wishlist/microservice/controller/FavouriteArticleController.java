package com.newsapp.wishlist.microservice.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newsapp.wishlist.microservice.entity.FavouriteArticle;
import com.newsapp.wishlist.microservice.exception.NewsArticleAlreadyExistsException;
import com.newsapp.wishlist.microservice.exception.NewsArticleNotFoundException;
import com.newsapp.wishlist.microservice.service.FavouriteArticleService;

@RestController
@RequestMapping("api/v1/articles")
@CrossOrigin("*")
public class FavouriteArticleController {

	private static final Logger logger = LoggerFactory.getLogger(FavouriteArticleController.class);

	@Autowired
	private FavouriteArticleService favouriteArticleService;

	@GetMapping("/all")
	public ResponseEntity<?> getAllArticles() {
		logger.info(String.format("Article [][][]]]] It is working"));

		return new ResponseEntity<List<FavouriteArticle>>(favouriteArticleService.getArticles(), HttpStatus.OK);
	}

	@PostMapping("/add")
	public ResponseEntity<?> addArticle(@RequestBody FavouriteArticle favouriteArticle)
			throws NewsArticleAlreadyExistsException {
		return new ResponseEntity<FavouriteArticle>(favouriteArticleService.saveArticle(favouriteArticle),
				HttpStatus.CREATED);
	}

	@GetMapping("/userId/{userId}")
	public ResponseEntity<?> getAllArticlesByUserId(@PathVariable Long userId) {
		return new ResponseEntity<List<FavouriteArticle>>(favouriteArticleService.getArticlesByUserId(userId),
				HttpStatus.OK);
	}

	@DeleteMapping("/userId/{userId}/id/{id}")
	public ResponseEntity<?> deleteArticleByUserIdAndId(@PathVariable Long userId, @PathVariable Long id) throws NewsArticleNotFoundException {
		return new ResponseEntity<FavouriteArticle>(favouriteArticleService.deleteArticleByUserIdAndId(userId, id), HttpStatus.OK);
	}

	@DeleteMapping("/id/{id}")
	public ResponseEntity<?> deleteArticle(@PathVariable Long id) throws NewsArticleNotFoundException {
		return new ResponseEntity<FavouriteArticle>(favouriteArticleService.deleteArticleById(id), HttpStatus.OK);
	}

}
