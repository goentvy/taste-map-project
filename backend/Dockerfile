FROM eclipse-temurin:21-jdk

WORKDIR /app
COPY . /app

RUN chmod +x gradlew

# 빌드 (테스트 생략 + 경고 확인)
RUN ./gradlew bootJar -x test --warning-mode all --stacktrace

# 실행
CMD ["java", "-jar", "build/libs/app.jar"]