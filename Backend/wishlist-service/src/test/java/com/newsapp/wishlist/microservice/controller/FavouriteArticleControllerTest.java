//package com.newsapp.wishlist.microservice.controller;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//import static org.junit.jupiter.api.Assertions.assertThrows;
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
//import static org.mockito.Mockito.when;
//
//import java.util.Arrays;
//import java.util.List;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//
//import com.newsapp.wishlist.microservice.entity.FavouriteArticle;
//import com.newsapp.wishlist.microservice.exception.NewsArticleAlreadyExistsException;
//import com.newsapp.wishlist.microservice.exception.NewsArticleNotFoundException;
//import com.newsapp.wishlist.microservice.service.FavouriteArticleService;
//
//@ExtendWith(MockitoExtension.class)
//public class FavouriteArticleControllerTest {
//
//	@Mock
//	private FavouriteArticleService favouriteArticleService;
//
//	@InjectMocks
//	private FavouriteArticleController favouriteArticleController;
//
//	@BeforeEach
//	public void init() {
//		MockitoAnnotations.openMocks(this);
//	}
//
//	@Test
//	void testGetAllArticles() {
//		FavouriteArticle article1 = new FavouriteArticle(1L, 120L, "Article 1", "Desc 1", "Content 1");
//		FavouriteArticle article2 = new FavouriteArticle(2L, 120L, "Article 2", "Desc 2", "Content 2");
//
//		List<FavouriteArticle> articles = Arrays.asList(article1, article2);
//
//		when(favouriteArticleService.getArticles()).thenReturn(articles);
//
//		ResponseEntity<?> responseEntity = favouriteArticleController.getAllArticles();
//
//		assertNotNull(responseEntity);
//		assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
//
//		List<FavouriteArticle> result = (List<FavouriteArticle>) responseEntity.getBody();
//		assertNotNull(result);
//		assertEquals(2, result.size());
//		assertEquals(article1, result.get(0));
//		assertEquals(article2, result.get(1));
//
//		verify(favouriteArticleService, times(1)).getArticles();
//	}
//
//	@Test
//	void testAddArticle_Success() throws NewsArticleAlreadyExistsException {
//		FavouriteArticle article = new FavouriteArticle(1L, 120L, "Test Article", "Description", "Content");
//
//		when(favouriteArticleService.saveArticle(article)).thenReturn(article);
//
//		ResponseEntity<?> responseEntity = favouriteArticleController.addArticle(article);
//
//		assertNotNull(responseEntity);
//		assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
//
//		FavouriteArticle result = (FavouriteArticle) responseEntity.getBody();
//		assertNotNull(result);
//		assertEquals(article, result);
//
//		verify(favouriteArticleService, times(1)).saveArticle(article);
//	}
//
//	@Test
//	void testAddArticle_AlreadyExists() throws NewsArticleAlreadyExistsException {
//		FavouriteArticle article = new FavouriteArticle(1L, 120L, "Test Article", "Description", "Content");
//
//		when(favouriteArticleService.saveArticle(article)).thenThrow(NewsArticleAlreadyExistsException.class);
//
//		assertThrows(NewsArticleAlreadyExistsException.class, () -> {
//			favouriteArticleController.addArticle(article);
//		});
//
//		verify(favouriteArticleService, times(1)).saveArticle(article);
//	}
//
//	@Test
//	void testDeleteArticle_Success() throws NewsArticleNotFoundException {
//		Long articleId = 1L;
//		FavouriteArticle article = new FavouriteArticle(articleId, 120L, "Test Article", "Description", "Content");
//
//		when(favouriteArticleService.deleteArticleById(articleId)).thenReturn(article);
//
//		ResponseEntity<?> responseEntity = favouriteArticleController.deleteArticle(articleId);
//
//		assertNotNull(responseEntity);
//		assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
//
//		FavouriteArticle result = (FavouriteArticle) responseEntity.getBody();
//		assertNotNull(result);
//		assertEquals(article, result);
//
//		verify(favouriteArticleService, times(1)).deleteArticleById(articleId);
//	}
//
//	@Test
//	void testGetArticlesByUserId() {
//		Long userId = 1L;
//		FavouriteArticle article1 = new FavouriteArticle(1L, 1L, "Article 1", "Desc 1", "Content 1");
//		FavouriteArticle article2 = new FavouriteArticle(2L, 1L, "Article 2", "Desc 2", "Content 2");
//		List<FavouriteArticle> articles = Arrays.asList(article1, article2);
//
//		when(favouriteArticleService.getArticlesByUserId(userId)).thenReturn(articles);
//
//		ResponseEntity<?> responseEntity = favouriteArticleController.getAllArticlesByUserId(userId);
//
//		assertNotNull(responseEntity);
//
//		assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
//
//		List<FavouriteArticle> result = (List<FavouriteArticle>) responseEntity.getBody();
//		assertNotNull(result);
//		assertEquals(2, result.size());
//		assertEquals(article1, result.get(0));
//		assertEquals(article2, result.get(1));
//
//		verify(favouriteArticleService, times(1)).getArticlesByUserId(userId);
//
//	}
//
//}
