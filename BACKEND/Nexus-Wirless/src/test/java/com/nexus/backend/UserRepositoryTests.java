package com.nexus.backend;

import static org.assertj.core.api.Assertions.assertThat;

import javax.persistence.EntityManager;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.annotation.Rollback;

import com.nexus.backend.model.User;
import com.nexus.backend.repository.UserRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private TestEntityManager entityManager;
	
	@Test
	public void testCreateUser() {
		User user = new User();
		user.setEmail("John1John@gmail.com");
		user.setFirstName("John");
		user.setLastName("SMith");
		user.setUsername("Johnny88");
		String rawPassword = "password";
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String encodedPassword = encoder.encode(rawPassword);
		user.setPassword(encodedPassword);
		
		User savedUser = repository.save(user);
		User existUser = entityManager.find(User.class,savedUser.getId());
		
		assertThat(existUser.getUsername()).isEqualTo(user.getUsername());
		
	}
	
	@Test
	public void testFindUserByUsername() {
		String username = "david88";
		User user = repository.findByusername(username);
		
		assertThat(user).isNotNull();
	}

}
