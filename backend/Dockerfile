FROM eclipse-temurin:21-jdk

WORKDIR /app

# 전체 소스 복사
COPY . /app

# 빌드 실행
RUN chmod +x gradlew
RUN ./gradlew clean bootJar -x test --warning-mode all --stacktrace

# 실행
EXPOSE 8080
CMD ["java", "-jar", "build/libs/app.jar"]