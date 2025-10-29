FROM eclipse-temurin:21-jdk

WORKDIR /app
COPY . /app

# Gradle 실행 권한 부여 (추가 안전장치)
RUN chmod +x gradlew

# backend 모듈만 빌드 ( 테스트 생략 )
RUN ./gradlew :backend:bootJar -x test

# 빌드된 JAR 실행
CMD ["java", "-jar", "backend/build/libs/taste-map-backend-0.0.1-SNAPSHOT.jar"]