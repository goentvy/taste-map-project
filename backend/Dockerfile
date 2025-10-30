FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY gradlew /app/
COPY gradle /app/gradle
COPY build.gradle settings.gradle /app/

COPY . /app

RUN chmod +x gradlew
RUN ./gradlew clean bootJar -x test --warning-mode all --stacktrace

# 결과물 복사
RUN cp build/libs/app.jar /app/app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]