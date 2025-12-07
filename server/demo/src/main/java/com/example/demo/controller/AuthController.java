package com.example.demo.controller;

import com.example.demo.dto.SigninRequest;
import com.example.demo.dto.SignupRequest;
import com.example.demo.security.jwt.TokenResponse;
import com.example.demo.service.AuthService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
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
    public String signup(@RequestBody SignupRequest request) {
        authService.signup(request);
        return "회원가입 성공";
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody SigninRequest request, HttpServletResponse response) {
        TokenResponse tokens = authService.signin(request);

        if (tokens.getRefreshToken() != null) {
            Cookie cookie = new Cookie("refreshToken", tokens.getRefreshToken());
            cookie.setHttpOnly(true);
            cookie.setSecure(false);
            cookie.setPath("/");
            cookie.setMaxAge(7 * 24 * 60 * 60);

            response.addCookie(cookie);
        }
        return ResponseEntity.ok(new TokenResponse(tokens.getAccessToken(), null));
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refresh(HttpServletRequest request) {

        // 1. 쿠키에서 refreshToken 찾아오기
        String refreshToken = null;
        if (request.getCookies() != null) {
            for (Cookie c : request.getCookies()) {
                if (c.getName().equals("refreshToken")) {
                    refreshToken = c.getValue();
                }
            }
        }

        if (refreshToken == null) {
            return ResponseEntity.status(401).body("Refresh Token 없음");
        }

        // 2. AuthService에 재발급 요청
        String newAccessToken = authService.reissueAccessToken(refreshToken);

        if (newAccessToken == null) {
            return ResponseEntity.status(401).body("Refresh Token 만료");
        }

        // 3. 프론트로 새 AccessToken 반환(JSON)
        return ResponseEntity.ok(new TokenResponse(newAccessToken, null));
    }
}