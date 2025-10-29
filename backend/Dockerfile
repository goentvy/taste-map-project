FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY gradlew /app/
COPY gradle /app/gradle
COPY build.gradle settings.gradle /app/
RUN chmod +x gradlew
RUN ./gradlew bootJar -x test --warning-mode all --stacktrace

COPY . /app

EXPOSE 8080

CMD ["java", "-jar", "build/libs/app.jar"]