package com.newsapp.userprofile.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.newsapp.userprofile.entity.User;
import com.newsapp.userprofile.entity.UserResponse;
import com.newsapp.userprofile.repository.UserRepository;
import com.newsapp.userprofile.service.KafkaProducerConfig;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private KafkaProducerConfig kafkaProducerConfig;

	@Autowired
	private UserRepository userRepository;

	@PostMapping("/users")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		User saveUser = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
		if (saveUser != null) {
			return new ResponseEntity<>("User is already exsiting!!", HttpStatus.CONFLICT);
		}
		User save = userRepository.save(user);

		UserResponse userResponse = new UserResponse();
		userResponse.setUsername(user.getUsername());
		userResponse.setPassword(user.getPassword());

		kafkaProducerConfig.sendMessage(userResponse);

		//return new ResponseEntity<>("User successfully registered!!", HttpStatus.CREATED);
		return new ResponseEntity<User>(save, HttpStatus.CREATED);

	}

}
