package com.newsapp.news.microservice.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.newsapp.news.microservice.entity.News;
import com.newsapp.news.microservice.service.NewsService;

//@WebMvcTest(NewsController.class)
@AutoConfigureMockMvc
public class NewsControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Mock
	private NewsService newsService;

	@InjectMocks
	private NewsController newsController;

	@BeforeEach
	public void init() {
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(newsController).build();
	}

	@Test
	void testGetNews() throws Exception {

		// Given
		String q = "Bitcoin";

		News news = new News(); // You can create a sample News object for testing

		// Mocking the behavior of newsService
		when(newsService.getNews(q)).thenReturn(news);

		// When and Then
		mockMvc.perform(get("/api/v1/news/{q}", q)).andExpect(status().isOk())
				.andExpect(content().json(new ObjectMapper().writeValueAsString(news)));

	}

}
