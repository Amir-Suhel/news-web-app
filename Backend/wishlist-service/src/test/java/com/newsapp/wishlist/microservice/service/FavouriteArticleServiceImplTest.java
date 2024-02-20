//package com.newsapp.wishlist.microservice.service;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertThrows;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
//import static org.mockito.Mockito.when;
//
//import java.util.Arrays;
//import java.util.List;
//import java.util.Optional;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.mockito.junit.jupiter.MockitoExtension;
//
//import com.newsapp.wishlist.microservice.entity.FavouriteArticle;
//import com.newsapp.wishlist.microservice.exception.NewsArticleAlreadyExistsException;
//import com.newsapp.wishlist.microservice.exception.NewsArticleNotFoundException;
//import com.newsapp.wishlist.microservice.repository.FavouriteArticleRepository;
//
//@ExtendWith(MockitoExtension.class)
//public class FavouriteArticleServiceImplTest {
//
//	@Mock
//	private FavouriteArticleRepository favouriteArticleRepository;
//
//	@InjectMocks
//	private FavouriteArticleServiceImpl favouriteArticleService;
//
//	@BeforeEach
//	public void init() {
//		MockitoAnnotations.openMocks(this);
//	}
//
//	@Test
//	void testSaveArticle_Success() throws NewsArticleAlreadyExistsException {
//		FavouriteArticle article = new FavouriteArticle(1L, 120L, "Test Article", "Description", "Content");
//
//		when(favouriteArticleRepository.existsById(article.getId())).thenReturn(false);
//		when(favouriteArticleRepository.save(article)).thenReturn(article);
//
//		FavouriteArticle savedArticle = favouriteArticleService.saveArticle(article);
//
//		assertEquals(article.getId(), savedArticle.getId());
//		assertEquals(article.getUserId(), savedArticle.getUserId());
//		assertEquals(article.getTitle(), savedArticle.getTitle());
//		assertEquals(article.getDescription(), savedArticle.getDescription());
//		assertEquals(article.getContent(), savedArticle.getContent());
//
//		verify(favouriteArticleRepository, times(1)).existsById(article.getId());
//		verify(favouriteArticleRepository, times(1)).save(article);
//	}
//
//	@Test
//	void testSaveArticle_AlreadyExists() {
//		FavouriteArticle article = new FavouriteArticle(1L, 120L, "Test Article", "Description", "Content");
//
//		when(favouriteArticleRepository.existsById(article.getId())).thenReturn(true);
//
//		assertThrows(NewsArticleAlreadyExistsException.class, () -> favouriteArticleService.saveArticle(article));
//
//		verify(favouriteArticleRepository, times(1)).existsById(article.getId());
//		verify(favouriteArticleRepository, times(0)).save(article);
//	}
//
//	@Test
//	void testGetArticles() {
//		FavouriteArticle article1 = new FavouriteArticle(1L, 120L, "Article 1", "Desc 1", "Content 1");
//		FavouriteArticle article2 = new FavouriteArticle(2L, 120L, "Article 2", "Desc 2", "Content 2");
//
//		List<FavouriteArticle> articles = Arrays.asList(article1, article2);
//
//		when(favouriteArticleRepository.findAll()).thenReturn(articles);
//
//		List<FavouriteArticle> result = favouriteArticleService.getArticles();
//
//		assertEquals(2, result.size());
//		assertEquals(article1, result.get(0));
//		assertEquals(article2, result.get(1));
//
//		verify(favouriteArticleRepository, times(1)).findAll();
//	}
//
//	@Test
//	void testDeleteArticleById_Success() throws NewsArticleNotFoundException {
//		Long articleId = 1L;
//		FavouriteArticle article = new FavouriteArticle(articleId, 120L, "Test Article", "Description", "Content");
//
//		when(favouriteArticleRepository.findById(articleId)).thenReturn(Optional.of(article));
//
//		FavouriteArticle deletedArticle = favouriteArticleService.deleteArticleById(articleId);
//
//		assertEquals(article, deletedArticle);
//
//		verify(favouriteArticleRepository, times(1)).findById(articleId);
//		verify(favouriteArticleRepository, times(1)).deleteById(articleId);
//	}
//
//	@Test
//	void testDeleteArticleById_NotFound() {
//		Long articleId = 1L;
//
//		when(favouriteArticleRepository.findById(articleId)).thenReturn(Optional.empty());
//
//		assertThrows(NewsArticleNotFoundException.class, () -> favouriteArticleService.deleteArticleById(articleId));
//
//		verify(favouriteArticleRepository, times(1)).findById(articleId);
//		verify(favouriteArticleRepository, times(0)).deleteById(any());
//	}
//
//	@Test
//	void testGetArticlesByUserId() {
//		Long userId = 120L;
//		FavouriteArticle article1 = new FavouriteArticle(1L, 120L, "Article 1", "Desc 1", "Content 1");
//		FavouriteArticle article2 = new FavouriteArticle(2L, 120L, "Article 2", "Desc 2", "Content 2");
//		List<FavouriteArticle> articles = Arrays.asList(article1, article2);
//
//		when(favouriteArticleRepository.findAllByUserId(userId)).thenReturn(articles);
//		List<FavouriteArticle> result = favouriteArticleService.getArticlesByUserId(userId);
//		assertEquals(2, articles.size());
//		assertEquals(article1, result.get(0));
//		assertEquals(article2, articles.get(1));
//
//	}
//}
