package com.newsapp.userprofile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableDiscoveryClient
public class UserProfileServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserProfileServiceApplication.class, args);
	}

//	@Bean
//	public NewTopic gettopic() {
//		return TopicBuilder.name("newTopic").build();
//	}

}
