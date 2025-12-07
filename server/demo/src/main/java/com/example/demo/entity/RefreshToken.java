package com.example.demo.entity;

import java.time.LocalDateTime;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class RefreshToken {
    @Id
    private String userId;
    private String refreshToken;
    private LocalDateTime expiryDate;
}
