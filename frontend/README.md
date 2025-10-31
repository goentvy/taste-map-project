# Taste Map Frontend

React + TypeScript 기반 맛있는식당을찾기위한 앱 Frontend

## 기술 스택
- Vite : 빠른 번들링과 개발 서버 제공
- React : 최신 버전의 React로 컴포넌트 기반 UI 개발
- TypeScript : 정적 타입을 통한 안정적인 코드 작성
- Axios : REST API 통신을 위한 HTTP 클라이언트
- Kakao Map SDK : 카카오 지도 SDK
- React Router Dom : SPA 라우팅 처리
- React Query : 서버 상태 관리 및 데이터 캐싱
- React Hot Toast : 사용자 알림 및 피드백 UI 구성

## 프로젝트 구조
src/
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
└── main.tsx       # 앱 진입점 (ReactDOM 렌더링)

## 📦 설치 및 실행

```bash
cd frontend
npm install
npm run dev
