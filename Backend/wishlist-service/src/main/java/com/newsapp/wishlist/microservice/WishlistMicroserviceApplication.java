package com.newsapp.wishlist.microservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.newsapp.wishlist.microservice.filter.JwtFilter;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

@SpringBootApplication
@EnableDiscoveryClient
public class WishlistMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(WishlistMicroserviceApplication.class, args);
	}

//	@Bean
//	public FilterRegistrationBean jwtFilter() {
//		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
//		filterRegistrationBean.setFilter(new JwtFilter());
//		filterRegistrationBean.addUrlPatterns("/api/v1/*");
//		return filterRegistrationBean;
//	}
//
//	@Configuration
//	class OpenApiConfig {
//		@Bean
//		public OpenAPI customconfig() {
//			final String securitySchemeName = "bearerAuth";
//
//			return new OpenAPI().addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
//					.components(new Components().addSecuritySchemes(securitySchemeName,
//							new SecurityScheme().name(securitySchemeName).type(SecurityScheme.Type.HTTP)
//									.scheme("Bearer").bearerFormat("JWT")));
//
//		}
//
//	}

}
