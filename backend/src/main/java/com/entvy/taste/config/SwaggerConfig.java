package com.entvy.taste.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI tasteMapOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Taste Map API")
                        .description("경기도 맛집 정보 API")
                        .version("v1.0"));
    }
}
