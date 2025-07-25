# 🛍️ 풀스택 쇼핑몰 프로젝트
<div align="center">
  <img src="frontend/src/assets/img/fullstack_site.png" alt="설명" width="600"/>
</div>

<br/><br/>

## 핵심 전자상거래 기능 구현 
- 로그인 / 회원가입  
- 상품 목록 / 상세 조회  
- 장바구니 기능  
- 주문 & 결제  
- 주문 내역 조회  

---

## 🛠 사용 기술

- **Frontend**: React, Redux (Redux Toolkit)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## 📁 폴더 구조
```
C:.
├─ backend
│ └─ src
│ ├─ middleware
│ ├─ models
│ └─ routes
└─ frontend
├─ public
└─ src
├─ assets
│ └─ img
├─ components
├─ layout
│ ├─ Footer
│ └─ NavBar
│ └─ Sections
├─ pages
│ ├─ CartPage
│ │ └─ Sections
│ ├─ DetailProductPage
│ │ └─ Sections
│ ├─ HistoryPage
│ ├─ LandingPage
│ │ └─ Sections
│ ├─ LoginPage
│ ├─ ProtectedPage
│ ├─ RegisterPage
│ └─ UploadProductPage
├─ store
└─ utils

```
---

## 🔧 주요 개선 사항

### ✅ Redux 코드 최적화

- **기존 문제**: 복잡한 reducer 관리, 중복된 action 정의
- **개선 방법**:
  - `createSlice`로 state, reducer, action을 한 번에 정의
  - `createAsyncThunk`로 비동기 로직 분리 및 액션 타입 자동 생성
- **성과**:
  - Redux 관련 코드 약 **30% 감소**
  - API 호출 로직 재사용성 및 가독성 향상

---

### ✅ 안정적인 서버 구현 (인증 및 데이터 처리)

- **기술 스택**: Node.js + Express + MongoDB
- **기능**: 사용자 데이터 CRUD 및 인증 처리
- **성과**:
  - Postman 테스트 기준 **응답 성공률 100%**
  - 데이터 처리 신뢰성 확보

---

### ✅ API 성능 최적화

- **구조 개선**:
  - 사용자 라우트(`user`)와 상품 라우트(`product`)를 모듈화
  - RESTful 방식으로 URL 및 메서드 체계화
- **성과**:
  - 신규 API 추가 시 **구현 시간 50% 단축**
  - 상품 조회 기준 **응답 속도 850ms → 510ms (약 40% 향상)**

---

## 📈 기대 효과

- 유지보수가 쉬운 코드 구조  
- 기능 확장에 유리한 RESTful 설계  
- 성능과 안정성을 모두 고려한 백엔드 구현  

---

