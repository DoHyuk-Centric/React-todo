package com.example.demo.controller;

import com.example.demo.dto.SignupRequest;
import com.example.demo.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173") // Vite 포트
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest request){
        authService.signup(request);
        return "회원가입 성공";
    }

    @PostMapping("/signin")
    public String signin(@RequestBody SignupRequest request){
        authService.signin(request);
        return "로그인";
    }
}