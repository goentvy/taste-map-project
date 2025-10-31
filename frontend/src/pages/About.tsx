import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', lineHeight: 1.6 }}>
      <h1>🗺️ Taste Map Project – Frontend</h1>
      <p>
        <strong>Taste Map</strong>은 맛있는 식당을 찾고, 지도에 기록하고, 다른 사용자와 공유할 수 있는 위치 기반 맛집 탐색 앱입니다.
        이 페이지는 해당 프로젝트의 프론트엔드 기술 스택과 폴더 구조를 소개합니다.
      </p>

      <h2>🎯 프로젝트 개요</h2>
      <ul>
        <li>React + TypeScript 기반의 SPA 구조</li>
        <li>카카오 지도 SDK를 활용한 위치 기반 맛집 시각화</li>
        <li>React Query를 통한 서버 상태 관리 및 캐싱</li>
        <li>Axios를 통한 백엔드 API 통신</li>
        <li>Toast 알림으로 사용자 피드백 제공</li>
      </ul>

      <h2>🧑‍💻 사용 기술 스택</h2>
      <ul>
        <li><strong>Vite</strong> – 빠른 번들링과 개발 서버 제공</li>
        <li><strong>React 19</strong> – 최신 컴포넌트 기반 UI 개발</li>
        <li><strong>TypeScript</strong> – 정적 타입을 통한 안정적인 코드 작성</li>
        <li><strong>Axios</strong> – REST API 통신을 위한 HTTP 클라이언트</li>
        <li><strong>Kakao Map SDK</strong> – 카카오 지도 기반 위치 시각화</li>
        <li><strong>React Router DOM</strong> – SPA 라우팅 처리</li>
        <li><strong>TanStack React Query</strong> – 서버 상태 관리 및 데이터 캐싱</li>
        <li><strong>React Hot Toast</strong> – 사용자 알림 및 피드백 UI 구성</li>
      </ul>

      <h2>📁 프로젝트 폴더 구조</h2>
      <pre style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
{`src/
├── assets/        # 이미지, 아이콘 등 정적 리소스
├── components/    # 재사용 가능한 UI 컴포넌트
├── constants/     # 앱 전역에서 사용하는 상수
├── hooks/         # 커스텀 React 훅
├── pages/         # 라우팅되는 페이지 컴포넌트
├── services/      # API 통신 로직
├── types/         # TypeScript 타입 정의
├── utils/         # 유틸리티 함수 모음
├── App.tsx        # 앱 루트 컴포넌트
├── Layout.tsx     # 공통 레이아웃 컴포넌트
└── main.tsx       # 앱 진입점 (ReactDOM 렌더링)`}
      </pre>

      <h2>🚀 설치 및 실행 방법</h2>
      <pre style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
{`cd frontend
npm install
npm run dev`}
      </pre>
    </div>
  );
};

export default About;