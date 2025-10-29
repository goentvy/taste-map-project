FROM eclipse-temurin:21-jdk

WORKDIR /app
COPY . /app

RUN chmod +x gradlew

# 경고 무시 + 상세 로그 출력
RUN ./gradlew :bootJar -x test --warning-mode all --stacktrace

CMD ["java", "-jar", "build/libs/taste-map-backend-0.0.1-SNAPSHOT.jar"]