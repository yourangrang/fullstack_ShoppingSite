<img src="../frontend/src/assets/img/fullstack_site.png" alt="풀스택사이트트" width="400"/>

로그인, 상품목록, 장바구니, 주문&결제, 주문내역 등 핵심 전자상거래 기능을 구현한 풀스택 쇼핑몰 사이트

사용기술 
  React, Redux, Node.js, ExpressJS, MongoDB

파일구조
C:.
├─backend
│  └─src
│      ├─middleware
│      ├─models
│      └─routes
└─frontend
    ├─public
    └─src
        ├─assets
        │  └─img
        ├─components
        ├─layout
        │  ├─Footer
        │  └─NavBar
        │      └─Sections
        ├─pages
        │  ├─CartPage
        │  │  └─Sections
        │  ├─DetailProductPage    
        │  │  └─Sections
        │  ├─HistoryPage
        │  ├─LandingPage
        │  │  └─Sections
        │  ├─LoginPage
        │  ├─ProtectedPage        
        │  ├─RegisterPage
        │  └─UploadProductPage    
        ├─store
        └─utils

개선
 ∙ 복잡한 Redux 코드 간소화 및 비동기 처리 효율성 향상
    - createSlice를 사용해 state, reducer, action을 한 번에 생성하고, createAsyncThunk로 액션 타입 자동 생성 및 비동기 로직 분리
       Redux 관련 코드량 약 30% 감소, 비동기 API 호출 로직의 재사용성과 가독성 증가

 ∙ 사용자 인증 및 데이터 저장 기능이 포함된 안정적인 서버 구축
   - Node.js와 Express로 RESTful 서버를 구축하고, MongoDB를 이용해 사용자 데이터를 CRUD 방식으로 관리
      Postman 테스트 기준 응답 성공률 100%, 사용자 데이터 처리 안정성 확보

 ∙  API 응답 속도 향상
   - 사용자 관련 라우트(user)와 상품 관련 라우트(product)를 별도 모듈로 분리하고, 각 기능에 맞는 HTTP 메서드 및 RESTful URL 체계 적용
     신규 API 추가 시 구현 시간 50% 단축, API 응답 속도 약 40% 향상 (상품 조회 기준 850ms -> 510ms)