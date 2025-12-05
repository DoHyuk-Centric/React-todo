package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SignupRequest {
    private String username;
    private String userID;
    private String userPW;
    private String email;
    private String phone;
}