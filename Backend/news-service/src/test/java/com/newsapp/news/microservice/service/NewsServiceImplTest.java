package com.newsapp.news.microservice.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestTemplate;

import com.newsapp.news.microservice.entity.News;

@ExtendWith(MockitoExtension.class)
public class NewsServiceImplTest {

	@Mock
	private RestTemplate restTemplate;

	@InjectMocks
	private NewsServiceImpl newsService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testGetNews() {
		// Given
		String q = "example";
		String apiKey = "d4cf13828d12411b9e89bac4ec9fec21";
		String url = "https://newsapi.org/v2/everything?q=example&apiKey=" + apiKey;
		News news = new News(); // create a sample News object for testing

		// Mocking the behavior of restTemplate
		when(restTemplate.getForObject(url, News.class)).thenReturn(news);

		// When
		News result = newsService.getNews(q);

		// Then
		assertEquals(news, result);

		// Verify that restTemplate.getForObject is called with the correct URL
		verify(restTemplate).getForObject(url, News.class);
	}
}
