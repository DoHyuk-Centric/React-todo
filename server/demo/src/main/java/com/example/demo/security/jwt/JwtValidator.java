package com.example.demo.security.jwt;

import io.jsonwebtoken.Jwts;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;

@Component
public class JwtValidator {

    private final JwtProvider jwtProvider;

    public JwtValidator(JwtProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }

    public String validateToken(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(jwtProvider.getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }
}
