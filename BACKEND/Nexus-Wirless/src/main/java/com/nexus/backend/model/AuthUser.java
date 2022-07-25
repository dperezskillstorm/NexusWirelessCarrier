package com.nexus.backend.model;

public class AuthUser {
	private String status;
	
	public AuthUser() {}

	public AuthUser(String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}