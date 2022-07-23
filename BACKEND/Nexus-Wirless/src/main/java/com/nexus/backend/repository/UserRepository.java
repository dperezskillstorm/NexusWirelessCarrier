package com.nexus.backend.repository;

import java.util.List;
import java.util.Optional

;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import com.nexus.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	User findByusername(String string);




}
