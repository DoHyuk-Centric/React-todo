package com.example.demo.dto;

public class SigninRespose {
    private String accessToken;
    
    public SigninRespose(String accessToken){
        this.accessToken = accessToken;
    }
    public String getAccessToken(){
        return accessToken;
    }
}