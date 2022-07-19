package com.nexus.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexus.backend.model.Device;
import com.nexus.backend.repository.DeviceRepository;

@RestController
@RequestMapping("/api/v1/")
public class DeviceController {
	@Autowired
	private DeviceRepository deviceRepository;
	
	@GetMapping("/devices")
	public List<Device> getAllDevices(){
		return deviceRepository.findAll();
	}

}
