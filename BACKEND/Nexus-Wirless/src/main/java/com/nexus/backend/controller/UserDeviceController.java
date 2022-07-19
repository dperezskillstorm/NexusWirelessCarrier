package com.nexus.backend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexus.backend.model.UserDevice;
import com.nexus.backend.repository.UserDeviceRepository;

@RestController
@RequestMapping("/api/v1/")
public class UserDeviceController {
	
	@Autowired
	private UserDeviceRepository userdeviceRepository;
	
	@GetMapping("/user_devices")
	public List<UserDevice> getAllUser(){
		return userdeviceRepository.findAll();
	}
}
