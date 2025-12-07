package com.example.demo.controller;

import com.example.demo.dto.SigninRequest;
import com.example.demo.dto.SignupRequest;
import com.example.demo.security.jwt.TokenResponse;
import com.example.demo.service.AuthService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest request){
        authService.signup(request);
        return "회원가입 성공";
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody SigninRequest request, HttpServletResponse response){
        TokenResponse tokens = authService.signin(request);

        if(tokens.getRefreshToken() != null){
            Cookie cookie = new Cookie("refreshToken", tokens.getRefreshToken());
            cookie.setHttpOnly(true);
            cookie.setSecure(false);
            cookie.setPath("/");
            cookie.setMaxAge(7*24*60*60);

            response.addCookie(cookie);
        }
        return ResponseEntity.ok(new TokenResponse(tokens.getAccessToken(), null));
    }
}