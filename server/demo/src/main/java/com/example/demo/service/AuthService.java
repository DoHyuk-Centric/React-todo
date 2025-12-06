package com.example.demo.service;

import com.example.demo.dto.SignupRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void signup(SignupRequest request) {

        // 이미 이메일 존재하는지 체크
        if(userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("이미 존재하는 이메일입니다.");
        }
        
        if(userRepository.existsByUserID(request.getUserID())){
            throw new RuntimeException("이미 존재하는 아이디입니다.");
        } 

        // 비번 암호화
        String encodedPassword = passwordEncoder.encode(request.getUserPW());

        // 유저 생성
        User user = User.builder()
                .username(request.getUsername())
                .userID(request.getUserID())
                .password(encodedPassword)
                .email(request.getEmail())
                .phone(request.getPhone())
                .build();

        userRepository.save(user);
    }

    public void signin(SignupRequest request){
        User user = userRepository.findByUserID(request.getUserID())
        .orElseThrow(() -> new RuntimeException("아이디를 확인해주세요."));
        //orElseThrow 참고 : https://velog.io/@wonizizi99/Optional%EC%9D%98-orElseorElseThrow-%EC%82%AC%EC%9A%A9%EB%B2%95

        if(!passwordEncoder.matches(request.getUserPW(), user.getPassword())) {
            throw new RuntimeException("비밀번호가 올바르지 않습니다.");
        }
    }
}