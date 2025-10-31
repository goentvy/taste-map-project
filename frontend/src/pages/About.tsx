import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Taste Map 소개</h1>

      <section>
        <h2>🍽️ Taste Map Frontend</h2>
        <p>React + TypeScript 기반 맛있는 식당을 찾기 위한 앱의 프론트엔드입니다.</p>

        <h3>기술 스택</h3>
        <ul>
          <li>Vite : 빠른 번들링과 개발 서버 제공</li>
          <li>React : 최신 버전의 React로 컴포넌트 기반 UI 개발</li>
          <li>TypeScript : 정적 타입을 통한 안정적인 코드 작성</li>
          <li>Axios : REST API 통신을 위한 HTTP 클라이언트</li>
          <li>Kakao Map SDK : 카카오 지도 SDK</li>
          <li>React Router Dom : SPA 라우팅 처리</li>
          <li>React Query : 서버 상태 관리 및 데이터 캐싱</li>
          <li>React Hot Toast : 사용자 알림 및 피드백 UI 구성</li>
        </ul>

        <h3>프로젝트 구조</h3>
        <pre>
{`src/
├── assets/        # 이미지, 아이콘, 폰트 등 정적 파일
├── components/    # 재사용 가능한 UI 컴포넌트
├── constants/     # 앱 전역에서 사용하는 상수 정의
├── hooks/         # 커스텀 React 훅
├── pages/         # 라우팅되는 주요 페이지 컴포넌트
├── services/      # API 호출 및 외부 서비스 연동
├── types/         # TypeScript 타입 정의
├── utils/         # 유틸리티 함수 모음
├── App.tsx        # 전체 앱의 루트 컴포넌트
├── Layout.tsx     # 공통 레이아웃 컴포넌트
└── main.tsx       # 앱 진입점 (ReactDOM 렌더링)`}
        </pre>

        <h3>설치 및 실행</h3>
        <pre>
{`cd frontend
npm install
npm run dev`}
        </pre>
      </section>

      <section>
        <h2>🛠️ Taste Map Backend</h2>
        <p>Spring Boot 기반 맛있는 식당을 찾기 위한 앱의 API 서버입니다.</p>

        <h3>주요 기능</h3>
        <ul>
          <li>태그 기반 맛집 필터링</li>
          <li>OpenAPI 기반 Swagger 문서 자동 생성</li>
          <li>Actuator를 통한 서버 상태 모니터링</li>
        </ul>

        <h3>기술 스택</h3>
        <ul>
          <li>Spring Web</li>
          <li>Spring Boot DevTools</li>
          <li>Spring Boot Actuator</li>
          <li>Spring Security</li>
          <li>Spring Data JPA</li>
          <li>MariaDB</li>
          <li>Lombok</li>
          <li>Bean Validation</li>
          <li>Jackson (JSON/XML)</li>
          <li>dotenv-java (.env 환경변수 관리)</li>
          <li>JUnit 5, Mockito</li>
        </ul>

        <h3>프로젝트 구조</h3>
        <pre>
{`src/main/java/com/entvy/taste/ 
├── config/        # 보안, CORS, Swagger 등 설정 클래스 
├── controller/    # REST API 엔드포인트 
├── dto/           # 요청/응답 데이터 객체 
├── entity/        # JPA 엔티티 클래스 
├── repository/    # DB 접근 레이어 (JPA 인터페이스) 
├── service/       # 핵심 비즈니스 로직 
└── TasteApplication.java  # 메인 클래스 (@SpringBootApplication)`}
        </pre>

        <h3>실행 방법</h3>
        <pre>
{`cd backend
./gradlew bootRun`}
        </pre>
      </section>
    </div>
  );
};

export default About;