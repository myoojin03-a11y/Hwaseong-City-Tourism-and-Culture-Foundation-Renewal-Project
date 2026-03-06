# 화성시문화관광재단 리뉴얼 프로젝트

HTML, CSS, JavaScript로 만든 화성시문화관광재단 리뉴얼 프로젝트로 저의 첫 프로젝트 입니다.


---


## 📌 프로젝트에 대하여
화성시문화관광재단 웹사이트를 리뉴얼한 프로젝트입니다.

기존 사이트는 정적인 콘텐츠 중심의 구성으로 이루어져 있었으며, 
‘문화관광’이라는 브랜드 이미지가 충분히 전달되지 않는다고 판단했습니다.  
이에 따라 사용자 경험 개선과 시각적 완성도를 높이기 위해 리뉴얼을 진행했습니다.


---


## 🧩 작업 범위
본 프로젝트는 개인 프로젝트로 전 과정을 단독으로 진행했습니다.

- 기획 : 기존 사이트 분석 및 리뉴얼 방향 설정
- 디자인 : UI 레이아웃 및 스타일 설계
- 개발 : Desktop / Mobile 두 가지 디바이스 버전 구현
- HTML, SCSS, JavaScript를 활용한 인터랙션 및 레이아웃 제작


---


## 🛠 사용 기술
- ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)


---


## ⏳ 작업기간
2025.12.08 ~ 2026.12.31


---


## 🔗 링크
- [기획서 보러가기](https://www.miricanvas.com/v/156mzna)
- [디자인 보러가기](https://www.figma.com/design/BsUkUKtFTYLOj7xpB3CPl9/%ED%99%94%EC%84%B1%EC%8B%9C%EB%AC%B8%ED%99%94%EA%B4%80%EA%B4%91%EC%9E%AC%EB%8B%A8_%EB%A6%AC%EB%89%B4%EC%96%BC%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=KfWb2pdXqx2tZhEB-1)
- [결과물 보러가기](https://khj544.dothome.co.kr/)


---


## ✨ 주요 기능
- 관광지 소개 탭 기반 슬라이더 
- 문화공간 탭 기반 슬라이더 
- 재단소식 서브 페이지 테이블 기반 게시판 리스트 (Client-side Pagination)
- 전체 일정 서브 페이지 JSON 데이터 기반 리스트 렌더링 
- 반응형 웹 레이아웃 제작 (Desktop / Mobile)


---


## 📂 프로젝트 구조

페이지별 유지보수 편의를 위해 CSS와 JavaScript를 페이지 단위로 분리하여 관리했습니다.

```
project
├─ css
│  ├─ common.css
│  ├─ style.css
│  ├─ sub1.css
│  ├─ sub2.css
│  └─ sub3.css
├─ js
│  ├─ index.js
│  ├─ sub1.js
│  ├─ sub2.js
│  └─ sub3.js
├─ images
├─ index.html
├─ sub1.html
├─ sub2.html
└─ sub3.html
```


---


## 📸 스크린샷

### Before / After

<table>
<tr>
<td align="center">
<img src="https://github.com/user-attachments/assets/7882a10b-6e7e-486a-95f2-4746a59b94e0" width="400"/>
</td>

<td align="center">
<img src="https://github.com/user-attachments/assets/7fef50f0-a090-49b2-b5bf-dc4abbb15fd4" width="400"/>
</td>
</tr>

<tr>
<td align="center"><b>Before</b></td>
<td align="center"><b>After</b></td>
</tr>
</table>

<br>
<br>


---


## ✨ 핵심 기능 

### 📢 세션 기반 포트폴리오 안내 모달 (Portfolio Entry Modal)

<img src="https://github.com/user-attachments/assets/17b2994a-68db-4126-b55b-e32136288181" alt="포트폴리오 안내 팝업 스크린샷"/>

### 기능 개요
배포 링크를 통해 페이지에 처음 진입했을 때만 노출되는 **안내용 레이어 팝업(모달)**입니다.  
사용자가 사이트를 탐색하는 동안 **불필요한 반복 노출을 방지하여 UX를 최적화**했습니다.

- **최초 1회 노출**  
  페이지 최초 접속 시 안내 팝업을 표시하여 핵심 정보를 전달

- **스마트 노출 제어**  
  새로고침 또는 페이지 이동 후 재진입 시 팝업이 다시 나타나지 않도록 제어

- **세션 기반 리셋**  
  브라우저 탭을 완전히 종료 후 다시 접속할 때만 팝업이 재노출

### ✔기술적 특징
- **DOM 조작**  
  `querySelector`와 `style.display`를 활용한 모달 열기/닫기 제어

- **상태 유지**  
  `sessionStorage`를 활용하여 세션 내 방문 여부 기록 및 팝업 노출 제어

- **UX 개선**  
  모달 활성화 시 `body { overflow: hidden }` 처리로 배경 스크롤 방지


### 🗺️관광지 슬라이더 (Hybrid Tour Guide Slider)

<img src="https://github.com/user-attachments/assets/a5b2fa33-19cb-48e9-9a62-8432b23b823d"/>
<img src="https://github.com/user-attachments/assets/e63f60fd-e2ea-4b89-bf35-dfde87dba937"/>

### 기능 개요
PC와 모바일 환경에 맞는 인터페이스를 각각 구현하여  
**화성 주요 관광지를 직관적으로 탐색할 수 있는 슬라이더 UI**를 제작했습니다.


### ✔CSS 핵심 기능

### 1. 탭 기반 슬라이드 표시 제어

```css
.mobile-slide {
  display: none;
}

.mobile-slide.active {
  display: block;
}
```

- 기본적으로 모든 슬라이드를 숨기고 `display: none`
- JavaScript에서 `active` 클래스를 부여한 슬라이드만 화면에 표시되도록 구현했습니다.
- **탭 클릭 시 콘텐츠가 전환되는 핵심 구조입니다.**


### 2. 모바일 가로 스크롤 탭 네비게이션

```css
.mobile-tabs {
  display: flex;
  overflow-x: auto;
}

.mobile-tabs .tab {
  flex-shrink: 0;
  white-space: nowrap;
}
```

- `flex`를 사용하여 탭 메뉴를 가로 정렬했습니다.
- `overflow-x: auto`를 통해 **모바일에서 좌우 스크롤 가능한 탭 메뉴**를 구현했습니다.
- `flex-shrink: 0`과 `white-space: nowrap`을 사용하여 **탭 크기 축소와 줄바꿈을 방지**했습니다.

### ✔JS 핵심 기능

### 1. JavaScript (PC - Swiper.js)

- 복합 상태 동기화
Swiper.realIndex를 기반으로 메인 슬라이드와 썸네일 버튼의 active 상태를 동기화

- 커스텀 페이지네이션
renderFraction 메서드를 활용하여 기본 페이지네이션을 커스터마이징하고
브랜드 스타일에 맞는 숫자 표시 방식 적용

### 2. JavaScript (Mobile - Vanilla JS)

- 자동재생 슬라이드 엔진
setInterval 기반 자동 슬라이드 구현
toggleAutoplay 버튼으로 재생 / 일시정지 제어

- 탭 스크롤 포커싱
scrollIntoView({ behavior: 'smooth' }) 적용
→ 선택된 탭이 항상 가시 영역 중앙에 위치하도록 처리


## 🎨 문화공간 탭 + 센터 슬라이더 (Tab + Center Slider)
<img src="https://github.com/user-attachments/assets/23326092-e7ed-4fb7-a06f-c32ef71a7b11"/>

문화공간을 **카테고리 탭과 Swiper 센터 슬라이더로 탐색할 수 있도록 구현한 인터페이스**입니다.  
탭을 클릭하면 해당 카테고리 슬라이더가 활성화되며 **슬라이드는 항상 지정된 센터 카드에서 시작**하도록 설계했습니다.


### ✔CSS 핵심 기능

### 센터 슬라이드 강조 UI

```css
.culturalSwiper .swiper-wrapper .place.swiper-slide-active {
  transform: scale(1);
}
```

- `swiper-slide-active` 클래스를 활용하여  
  **중앙 슬라이드를 강조하는 센터 카드 UI 구현**


### ✔JavaScript 핵심 기능

### 탭 기반 콘텐츠 전환

```javascript
const targetId = this.dataset.tab;
document.getElementById(targetId).classList.add('active');
```

- `data-tab` 속성을 활용하여 **탭과 슬라이더 연결**
- 클릭한 카테고리의 **슬라이더만 활성화**


### 탭 변경 시 슬라이드 초기화

```javascript
swiper.slideTo(RESET_INDEX, 0);
```

- 탭 변경 시 슬라이드가 **항상 동일한 위치(센터 카드)**에서 시작하도록 초기화


---


## 🔥 문제점과 해결방안

### ✔ 모바일 네비게이션 메뉴에 `list-style: square` 으로 적용 후 `padding-left`로 불릿이 이동하지 않는 문제

### 문제
`list-style: square`를 적용한 리스트에서 `padding-left`를 주면  
텍스트는 이동하지만 **불릿(■)은 이동하지 않는 현상**이 발생했습니다.

```css
li {
  list-style: square;
  padding-left: 10px;
}
```

**결과**

- 텍스트만 오른쪽으로 이동
- 불릿(■)은 기존 위치에 그대로 남아 있음

---

### 원인

CSS 기본값 때문인데, 리스트 스타일의 기본 설정은 다음과 같습니다.

```css
list-style-position: outside; /* 기본값 */
```

`outside` 상태에서는

- 불릿이 **li 요소의 박스 바깥 영역**에 위치
- `padding-left`는 **li 내부 콘텐츠 영역**에만 적용됨

따라서 `padding-left`를 적용해도 **텍스트만 이동하고 불릿은 이동하지 않습니다.**

---

### 해결 방법

#### `list-style-position: inside` 사용

```css
li {
  list-style-type: square;
  list-style-position: inside;
  padding-left: 8px;
}
```

**결과**

- 불릿이 `li` 내부로 들어옴
- `padding-left` 적용 시 **텍스트와 불릿이 함께 이동**

### 정리
`list-style-position: inside`로 문제가 해결이 가능하단걸 알게되었고,해결방안을 모색해보며 list-style-type 대신 `::before` 가상 선택자를 사용하면 디자인 제어가 더 쉽게 가능하단 것도 깨달았습니다.


---


## 💡 프로젝트를 진행하며 배운 점
- 데스크탑 환경에서 반응형으로 전환될 때의 레이아웃 설계와 구현 방식을 이해하게 되었습니다.
- 웹사이트의 UI 구조와 웹디자인 설계 과정에 대해 이해할 수 있었습니다.
- 실제 웹사이트를 제작하면서 기획부터 구현까지의 전체 작업 흐름을 경험할 수 있었습니다.
- 다양한 슬라이더를 적용하며 라이브러리 API를 활용하는 방법을 익혔습니다.
- 학습으로만 접했던 HTML, CSS, JavaScript를 실제 프로젝트에 적용하며 더욱 깊이 이해하고 익숙해질 수 있었습니다.
- 시맨틱 구조의 중요성과 올바른 마크업 방식에 대해 이해하게 되었습니다.
- 헷갈렸던 position, flex, 가상 선택자의 동작 원리와 활용 방법을 정리하고 익힐 수 있었습니다.


---


## 💭 Project Reflection
기획 → 디자인 → 개발까지 모든 과정을 처음부터 끝까지 스스로 진행해 본 첫 프로젝트였습니다.  
단순히 화면을 만드는 것을 넘어서, 한 프로젝트가 어떤 흐름으로 완성되는지 몸으로 느낄 수 있는 시간이었습니다.  
처음에는 헷갈리는 것들이 많고 낯설었지만, 하나의 결과물을 스스로 완성했다는 뿌듯함과 함께 더 성장하고 싶다는 동기부여가 된 프로젝트였습니다.😄
