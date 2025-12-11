package com.example.demo.security.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

    private final JwtProvider jwtProvider;

    public JwtUtil(JwtProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }

    /**
     * Authorization 헤더에서 AccessToken 추출
     */
    public String resolveAccessToken(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            return header.substring(7);
        }
        return null;
    }

    /**
     * 토큰에서 userId(subject) 가져오기
     */
    public String getUserId(String token) {
        return getClaims(token).getSubject();
    }

    /**
     * 토큰 남은 만료시간(ms) 계산
     */
    public long getRemainingExpiration(String token) {
        long now = System.currentTimeMillis();
        long exp = getClaims(token).getExpiration().getTime();
        return exp - now;
    }

    /**
     * JWT 파싱 공통 메서드
     */
    private Claims getClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(jwtProvider.getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
