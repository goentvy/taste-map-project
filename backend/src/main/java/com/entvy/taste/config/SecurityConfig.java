package com.entvy.taste.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // CSRF 비활성화 (API 서버일 경우)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/taste/**").permitAll() // taste API 허용
                        .requestMatchers("/api/public/**").permitAll() // 공개 API
                        .requestMatchers("/api/admin/**").hasRole("ADMIN") // 관리자 전용
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        .requestMatchers(
                                "/swagger-ui/**",
                                "/v3/api-docs/**",
                                "/swagger-resources/**",
                                "/webjars/**"
                        ).permitAll()
                        .anyRequest().authenticated() // 나머지는 인증 필요
                )
                .httpBasic(httpBasic -> httpBasic.disable()) // HTTP Basic 비활성화
                .formLogin(form -> form.disable()); // Form 로그인 비활성화 (JWT 기반이면 필요 없음)

        return http.build();
    }
}
