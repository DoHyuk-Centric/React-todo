package com.example.demo.security.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class JwtProvider {

    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256); // 비밀키 생성
    private final long accessToken = 1000 * 60 * 15; // 15분
    private final long refreshToken = 1000L * 60 * 60 * 24 * 7; // 7일

    public String generateAccessToken(String userID) { // AccessToken
        return generateToken(userID, accessToken);
    }

    public String generateRefreshToken(String userID) { // RefreshToken
        return generateToken(userID, refreshToken);
    }

    public String generateToken(String userID, long validityMillis) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + validityMillis);

        return Jwts.builder()
                .setSubject(userID)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(key)
                .compact();
    }

    public String getUserIDFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public Key getKey(){
        return key;
    }
}
