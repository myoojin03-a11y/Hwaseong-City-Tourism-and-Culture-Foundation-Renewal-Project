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
