package com.newsapp.wishlist.microservice.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "wishlist")
public class FavouriteArticle {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long userId;
	private String author;
	private String title;
	private String description;
	private String url;
	private String urlToImage;
	private String publishedAt;
	private String content;
	public FavouriteArticle() {

	}
	public FavouriteArticle(Long id, Long userId, String author, String title, String description, String url, String urlToImage, String publishedAt, String content) {
		this.id = id;
		this.userId = userId;
		this.author = author;
		this.title = title;
		this.description = description;
		this.url = url;
		this.urlToImage = urlToImage;
		this.publishedAt = publishedAt;
		this.content = content;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getUrlToImage() {
		return urlToImage;
	}

	public void setUrlToImage(String urlToImage) {
		this.urlToImage = urlToImage;
	}

	public String getPublishedAt() {
		return publishedAt;
	}

	public void setPublishedAt(String publishedAt) {
		this.publishedAt = publishedAt;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "FavouriteArticle{" +
				"id=" + id +
				", userId=" + userId +
				", author='" + author + '\'' +
				", title='" + title + '\'' +
				", description='" + description + '\'' +
				", url='" + url + '\'' +
				", urlToImage='" + urlToImage + '\'' +
				", publishedAt='" + publishedAt + '\'' +
				", content='" + content + '\'' +
				'}';
	}
}