# B.ROOM — 스터디 모임 매칭 플랫폼

> 직군과 기술 스택 기반으로 스터디 그룹을 찾고 개설할 수 있는 풀스택 웹 서비스

<br/>

## 목차

- [소개](#소개)
- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [API 목록](#api-목록)
- [브랜치 전략](#브랜치-전략)
- [팀 구성](#팀-구성)

<br/>

## 소개

B.ROOM은 개발자, 디자이너, 기획자가 직군과 기술 스택을 기반으로 스터디 모임을 매칭할 수 있는 플랫폼입니다. 모임 생성/참가, 좋아요, 프로필 관리 등 커뮤니티 서비스의 핵심 기능을 제공합니다.

- **GitHub:** https://github.com/bbakkomm/broom
- **디자인(Figma):** https://www.figma.com/design/7ACRxyLLiCJJyEXa0djXzT/B.ROOM-Design?node-id=195-12697

<br/>

## 기술 스택

### Backend

| 분류 | 기술 |
|---|---|
| 런타임 | Node.js |
| 프레임워크 | Express.js 4 |
| 데이터베이스 | MongoDB + Mongoose |
| 인증 | JWT + bcryptjs |
| 파일 업로드 | Multer + Cloudinary |
| 보안 | Helmet, express-rate-limit, CORS |
| 유효성 검증 | express-validator |
| 유틸 | dayjs, morgan, cookie-parser |
| 개발 환경 | Nodemon, Concurrently |

### Frontend

| 분류 | 기술 |
|---|---|
| UI 프레임워크 | React 18 |
| 빌드 도구 | Vite |
| 라우팅 | React Router DOM v6 |
| 서버 상태 관리 | TanStack React Query v4 |
| HTTP 클라이언트 | Axios |
| UI 컴포넌트 | MUI v6, styled-components |
| 슬라이더 | Swiper |
| 차트 | Recharts |
| 알림 | React Toastify |
| 아이콘 | React Icons |

<br/>

## 주요 기능

### 회원 관련
- 회원가입 / 로그인 / 로그아웃
- 아이디·비밀번호 찾기 및 재설정
- 프로필 조회·수정 (직군, 기술 스택, 소개글, 프로필 이미지)
- 마이페이지 (찜한 스터디, 참가 중인 스터디)

### 스터디 관련
- 스터디 생성 (제목, 썸네일, 기간, 시간, 장소, 가격, 인원, 직군, 기술 태그)
- 목록 조회 — 검색, 직군 필터, 모집 상태 필터, 최신순·좋아요순 정렬
- 상세 조회 (참가자 목록, 좋아요)
- 스터디 수정·삭제 (작성자 전용)
- 참가·탈퇴
- 좋아요 토글

### 홈
- 배너 캐러셀 (Swiper)
- 최신 스터디 카드 리스트

<br/>

## 프로젝트 구조

```
broom/
├── server.js                  # Express 서버 진입점
├── package.json               # 백엔드 의존성
├── models/
│   ├── UserModel.js
│   └── StudyModel.js
├── routes/
│   ├── authRouter.js
│   ├── studyRouter.js
│   └── userRouter.js
├── controllers/               # 비즈니스 로직
├── middleware/                # 인증, 유효성 검증, 에러 처리
└── client/                    # React 프론트엔드
    ├── package.json
    └── src/
        ├── App.jsx
        ├── pages/
        │   ├── Home.jsx
        │   ├── Study.jsx
        │   ├── register/      # Join, Login, Id/Pw 찾기
        │   ├── profile/       # Profile, ProfileEdit
        │   └── list/          # Creation, Detail, DetailEdit
        ├── components/
        │   └── common/        # Header, Nav, StudyCard 등
        └── utils/
            └── customFetch.js # Axios 래핑 유틸
```

<br/>

## 시작하기

### 요구 사항

- Node.js 18+
- MongoDB Atlas 계정 또는 로컬 MongoDB

### 설치 및 실행

```bash
# 1. 레포지토리 클론
git clone https://github.com/bbakkomm/broom.git
cd broom

# 2. 백엔드 + 프론트엔드 의존성 한 번에 설치
npm run setup-project

# 3. 루트에 .env 파일 생성 (아래 항목 작성)
```

### .env 설정

```env
MONGO_URL=<MongoDB 연결 URI>
JWT_SECRET=<JWT 시크릿 키>
JWT_EXPIRES_IN=<토큰 만료 기간, 예: 1d>
CLOUD_NAME=<Cloudinary 클라우드 이름>
CLOUD_API_KEY=<Cloudinary API 키>
CLOUD_API_SECRET=<Cloudinary API 시크릿>
NODE_ENV=development
```

### 실행 명령어

```bash
# 백엔드 + 프론트엔드 동시 실행 (권장)
npm run dev

# 백엔드만 실행 (포트 5100)
npm run server

# 프론트엔드만 실행
cd client && npm run dev

# 프로덕션 빌드
npm run build
```

<br/>

## API 목록

Base URL: `/api/v1`

### Auth — `/auth`

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | `/register` | 회원가입 |
| POST | `/login` | 로그인 |
| GET | `/logout` | 로그아웃 |
| POST | `/find-id` | 아이디 찾기 |
| POST | `/find-pw` | 비밀번호 찾기 |
| PATCH | `/reset-pw` | 비밀번호 재설정 |

### Users — `/users`

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | `/current-user` | 현재 로그인 사용자 정보 |
| GET | `/all-user` | 전체 유저 목록 |
| GET | `/single-user/:id` | 단일 유저 정보 (`id`: `_id`) |
| PATCH | `/update-user` | 프로필 수정 |

### Study — `/study`

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | `/` | 전체 스터디 목록 (검색, 필터, 정렬) |
| POST | `/` | 스터디 생성 |
| GET | `/:id` | 단일 스터디 상세 (`id`: `_id`) |
| PATCH | `/:id` | 스터디 수정 |
| DELETE | `/:id` | 스터디 삭제 |
| GET | `/user/:id` | 특정 유저가 작성한 스터디 목록 (`id`: `createdBy`) |
| PATCH | `/:id/join` | 스터디 참가·탈퇴 |
| PATCH | `/:id/like` | 좋아요 토글 |

<br/>

## 브랜치 전략

```
main ── dev ── feature/기능명
               bugfix/버그명
```

1. `dev` 기준으로 작업 브랜치 생성
2. 작업 완료 후 `dev`로 PR 생성
3. 코드 리뷰 완료 후 본인이 Merge
4. 병합된 브랜치는 GitHub에서 삭제

```bash
git checkout dev
git pull
git checkout -b feature/기능명

# 작업 완료 후
git add .
git commit -m "feat: 기능 설명"
git push --set-upstream origin feature/기능명
# → GitHub에서 PR 생성
```

<br/>

## 팀 구성

| 역할 | 담당자 |
|---|---|
| 기획 | 데이빗, 유미 |
| 디자인 | 유미 |
| 개발 | 데이빗, 제이콥, 유미, 모건 |
