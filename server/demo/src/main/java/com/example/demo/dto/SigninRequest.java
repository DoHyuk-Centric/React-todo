package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SigninRequest {
    private String userID;
    private String userPW;
    private boolean autoLogin;
}