# Taste Map Backend

Spring Boot 기반 맛있는 식당을 찾기 위한 앱 API 서버입니다.

---

## ✅ 주요 기능

- 태그 기반 맛집 필터링
- OpenAPI 기반 Swagger 문서 자동 생성
- Actuator를 통한 서버 상태 모니터링

---

## 🛠️ 기술 스택

- 🌐 Spring Web
- 🔁 Spring Boot DevTools
- 📈 Spring Boot Actuator
- 🔐 Spring Security
- 🗃️ Spring Data JPA
- 🐬 MariaDB
- 🧰 Lombok
- ✅ Bean Validation
- 📄 Jackson (JSON/XML)
- 🌿 dotenv-java (.env 환경변수 관리)
- 🧪 JUnit 5, Mockito

---

## 📁 프로젝트 구조
```markdown
src/main/java/com/entvy/taste/ 
├── config/        # 보안, CORS, Swagger 등 설정 클래스 
├── controller/    # REST API 엔드포인트 
├── dto/           # 요청/응답 데이터 객체 
├── entity/        # JPA 엔티티 클래스 
├── repository/    # DB 접근 레이어 (JPA 인터페이스) 
├── service/       # 핵심 비즈니스 로직 
└── TasteApplication.java  # 메인 클래스 (@SpringBootApplication)
```

---

## ▶️ 실행 방법

```bash
cd backend
./gradlew bootRun