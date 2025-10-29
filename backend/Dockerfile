# 1. Java 21 기반 이미지 사용
FROM openjdk:21-jdk-slim

# 2. 작업 디렉토리 생성
WORKDIR /app

# 3. Gradle 빌드 결과물 복사 (JAR 파일)
COPY build/libs/taste-map-backend-0.0.1-SNAPSHOT.jar app.jar

# 4. 포트 설정 (Spring Boot 기본 8080)
EXPOSE 8080

# 5. 실행 명령
ENTRYPOINT ["java", "-jar", "app.jar"]