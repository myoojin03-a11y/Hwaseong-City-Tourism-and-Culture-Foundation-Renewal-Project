# 화성시문화관광재단 리뉴얼 프로젝트

HTML, CSS, JavaScript로 만든 화성시문화관광재단 리뉴얼 프로젝트로 저의 첫 프로젝트 입니다.


## 📌 About Project
화성시문화관광재단 웹사이트를 리뉴얼한 프로젝트입니다.

기존 사이트는 정적인 콘텐츠 중심의 구성으로 이루어져 있었으며, 
‘문화관광’이라는 브랜드 이미지가 충분히 전달되지 않는다고 판단했습니다.  
이에 따라 사용자 경험 개선과 시각적 완성도를 높이기 위해 리뉴얼을 진행했습니다.

## 🧩 Scope of work
본 프로젝트는 개인 프로젝트로 전 과정을 단독으로 진행했습니다.

- 기획 : 기존 사이트 분석 및 리뉴얼 방향 설정
- 디자인 : UI 레이아웃 및 스타일 설계
- 개발 : Desktop / Mobile 두 가지 디바이스 버전 구현
- HTML, SCSS, JavaScript를 활용한 인터랙션 및 레이아웃 제작

## 🛠 Tech Stack
- ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)


## ⏳ Work Period
2025.12.08 ~ 2026.01.02


## 🔗 link
- [기획서 보러가기](https://www.miricanvas.com/v/156mzna)
- [디자인 보러가기](https://www.figma.com/design/BsUkUKtFTYLOj7xpB3CPl9/%ED%99%94%EC%84%B1%EC%8B%9C%EB%AC%B8%ED%99%94%EA%B4%80%EA%B4%91%EC%9E%AC%EB%8B%A8_%EB%A6%AC%EB%89%B4%EC%96%BC%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=KfWb2pdXqx2tZhEB-1)
- [결과물 보러가기](https://khj544.dothome.co.kr/)

## ✨ Features
- 메인 비주얼 슬라이드 배너 구현
- 행사 안내 카드 슬라이드(캐러셀) 구현
- 자주 찾는 서비스 아이콘 메뉴 UI 구성
- 관광지 소개 인터랙션 섹션 제작
- 문화공간 콘텐츠 슬라이드 UI 구현
- 재단소식 게시판 리스트 페이지 제작
- 공연·전시 전체일정 카드형 리스트 페이지 제작
- SNS 콘텐츠 카드 레이아웃 구성
- 반응형 웹 레이아웃 제작 (Desktop / Mobile)


## 📂 Project Structure

### 📦 project
┣ 📂 css <br>
┣ 📂 js <br>
┣ 📂 images <br>
&nbsp;┗ 📄 index.html <br> 
&nbsp;┗ 📄 sub1.html <br> 
&nbsp;┗ 📄 sub2.html <br> 
&nbsp;┗ 📄 sub3.html <br> 



## 📸 Screenshot

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

## 핵심 기능

### 🖱️ 세션 기반 포트폴리오 안내 모달 (Portfolio Entry Modal)

<img src="https://github.com/user-attachments/assets/17b2994a-68db-4126-b55b-e32136288181" alt="포트폴리오 안내 팝업 스크린샷"/>

#### 기능 개요
배포 링크를 통해 페이지에 처음 진입했을 때만 노출되는 **안내용 레이어 팝업(모달)**입니다. 사용자가 사이트를 탐색하는 동안 불필요한 반복 노출을 방지하여 최적화된 UX를 제공합니다.

*   **최초 1회 노출:** 페이지 접속 시 안내 창을 띄워 핵심 정보를 전달합니다.
*   **스마트 노출 제어:** 새로고침이나 페이지 이동 후 재진입 시 팝업이 다시 뜨지 않아 탐색 흐름을 방해하지 않습니다.
*   **세션 기반 리셋:** 브라우저 탭을 완전히 닫고 재오픈할 때만 다시 등장하도록 설계되었습니다.

#### 기술적 특징
- **DOM 조작:** `querySelector`와 `style.display`를 이용한 직관적인 팝업 개폐 로직 구현
- **상태 유지:** `sessionStorage`를 활용하여 현재 세션의 방문 상태를 기록하고 노출 여부 결정
- **UX 최적화:** 팝업 활성화 시 `body`의 `overflow: hidden` 처리를 통해 배경 스크롤을 방지하여 가독성 향상


### 🖱️ 세션 기반 포트폴리오 안내 모달 (Portfolio Entry Modal)




## 💡 What I Learned
- 공공기관 웹사이트 정보 구조를 고려한 레이아웃 설계 경험
- 반응형 웹 제작 과정에서 다양한 화면 대응 방법 학습
- 슬라이드 및 캐러셀 UI 구현 경험
- 실제 서비스 리뉴얼 프로젝트 흐름 경험



## 🚀 Getting Started
별도의 설치 없이 브라우저에서 바로 실행 가능합니다.

index.html 파일을 실행하여 확인할 수 있습니다.

## 💭 Project Reflection
기획 → 디자인 → 개발까지 모든 과정을 처음부터 끝까지 스스로 진행해 본 첫 프로젝트였습니다.  
단순히 화면을 만드는 것을 넘어서, 한 프로젝트가 어떤 흐름으로 완성되는지 몸으로 느낄 수 있는 시간이었습니다.  
처음에는 어렵고 낯설었지만, 하나의 결과물을 스스로 완성했다는 뿌듯함과 함께 더 성장하고 싶다는 동기부여가 된 프로젝트였습니다. 
