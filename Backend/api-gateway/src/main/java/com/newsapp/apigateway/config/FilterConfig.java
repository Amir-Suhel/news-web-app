//package com.newsapp.apigateway.config;
//
//import org.springframework.boot.web.servlet.FilterRegistrationBean;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import com.newsapp.apigateway.filter.JwtFilter;
//
//@Configuration
//public class FilterConfig {
//
//	@Bean
//	public FilterRegistrationBean jwtFilter() {
//		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
//		filterRegistrationBean.setFilter(new JwtFilter());
//		filterRegistrationBean.addUrlPatterns("/api/v1/*");
//		return filterRegistrationBean;
//	}
//
//}
