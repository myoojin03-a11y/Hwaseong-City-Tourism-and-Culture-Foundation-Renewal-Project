//헤더
//햄버거
let hamburgerNav = document.querySelector('.hamburger_nav');
let hamburgerBtn = document.querySelector('.hamburger_btn');
let lnbList = document.querySelector('.lnb_list');
/* 
햄버거 버튼 클릭 시
만약 (네비게이션에 active 클래스가 있으면)
→ active class 제거 (닫기)
아니면
→ active class 추가 (열기)
*/
hamburgerNav.addEventListener('click', function () {
  if (hamburgerNav.classList.contains('active')) {
    this.classList.remove('active');
    hamburgerBtn.classList.remove('active');
  } else {
    this.classList.add('active');
    hamburgerBtn.classList.add('active');
  }
});


//메인네비게이션 
let hasSub = document.querySelectorAll('.has_sub');
let allLnb = document.querySelectorAll('.nav_gnb .lnb');
let gnbWrap = document.querySelector('.nav_gnb_wrap');

// util
let closeAllLnb = () => {
  allLnb.forEach(lnb => lnb.style.display = 'none');
};

// event
hasSub.forEach(menu => {
  menu.addEventListener('mouseenter', () => {
    //hamburgerNav의 클래스가 active일때도 allLnb의 스타일을none한다(반복)
    if (hamburgerNav.classList.contains('active')) {
      return;
    }
    closeAllLnb();
    menu.nextElementSibling.style.display = 'flex';
  });
});

gnbWrap.addEventListener('mouseleave', closeAllLnb);

//li에 마우스오버시 흰 캡슐 배경 깔리기
let gnbList = document.querySelectorAll('.nav_gnb li');
/* 
gnbList에 반복한다
마우스오버시
→ active class 추가 (깔리기)
마우스리브시
→ active class 닫기 (사라지기)
*/
gnbList.forEach(function (gnbbg) {
  gnbbg.addEventListener('mouseenter', function () {
    if (hamburgerNav.classList.contains('active')) {
      return;
    }
    this.classList.add('active')
  });
  gnbbg.addEventListener('mouseleave', function () {
    this.classList.remove('active')
  });
});

/* 헤더 fixed */
/* let headerIsFixed = document.getElementById('header');

window.addEventListener('scroll', function(){
  if(window.scrollY > 500){
    headerIsFixed.classList.add('is_fixed');
  }else{
    headerIsFixed.classList.remove('is_fixed');
  }
});
 */

/* 모바일 햄버거 */
hamburgerBtn.addEventListener('click', function () {
  const open = mobailMenu.classList.toggle('active');
  this.classList.toggle('active', open);
  mobailMenuOpen.classList.toggle('active', open);

  let mMenuImg = document.querySelector('.m_menu_img');
  let topMenu = document.querySelector('.top_menu');

  mMenuImg.classList.toggle('active');
  topMenu.classList.toggle('active');
});

/* 모바일 메뉴 */
let mobailgnbTabs = document.querySelectorAll('.m_gnb_tab');
let mobailLnbs = document.querySelectorAll('.m_lnb');

mobailgnbTabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    let targetId = tab.dataset.target;

    /* 모든 gnb의 active 제거 */
    mobailgnbTabs.forEach(function (t) {
      t.classList.remove('active');
    });
    /* 모든 lnb의 active 제거 */
    mobailLnbs.forEach(function (l) {
      l.classList.remove('active');
    });
    tab.classList.add('active');

    /* 클릭한 lnb만 보이게 */
    console.log(targetId);
    let targetlnb = document.getElementById(targetId);
    console.log(targetlnb);
    if (targetlnb) {
      targetlnb.classList.add('active');
    }
  });
});

/* 모바일 메뉴가 열려있으면 바디에 active(overflow: hidden;)*/
let mobailMenuOpen = document.querySelector('.m_menu_open');
let mobailMenu = document.querySelector('.mobail_menu');

if (mobailMenu.classList.contains('active')) {
  mobailMenuOpen.classList.add('active');
} else {
  mobailMenuOpen.classList.remove('active');
};

//페이지인트로
let toggles = document.querySelectorAll('.menu_toggle');

toggles.forEach(toggle => {
  let btn = toggle.querySelector('.menu_btn');
  let menu = toggle.querySelector('.main_menu');
  let down = toggle.querySelector('i');

  btn.addEventListener('click', () => {
    // 다른 메뉴 닫기
    toggles.forEach(t => {
      if (t !== toggle) {
        t.querySelector('.main_menu').classList.remove('active');
      }
    });
    // 내 메뉴 토글
    menu.classList.toggle('active');
    //화살표 아이콘 회전
    if (menu.classList.contains('active')) {
      down.classList.add('active');
    } else {
      down.classList.remove('active');
    };
  });
});

/* 서치 버튼 */
//변수등록
let searchBtn = document.querySelector('#pageIntro .search_btn');
let searchTab = document.querySelector('#pageIntro .search_tab');
let searchInput = document.querySelector('#pageIntro .search_tab input');

searchBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  searchTab.classList.toggle('active');
  searchInput.classList.toggle('active');

  if (window.innerWidth < 768) {
    this.classList.remove('active');
    searchTab.classList.remove('active');
    searchInput.classList.remove('active');
  }
});

//게시판 목록
//변수등록
//한페이지당 보여질 행의 개수
let rowPerPage = 15;
//테이블의 모든 행
let rows = document.querySelectorAll('#noticeTable tbody tr');
//전체 행 개수 
let rowsCount = rows.length;
//페이지 수 계산
let pageCount = Math.ceil(rowsCount / rowPerPage);
//ol페이지 번호 표시할 요소
let numbers = document.querySelector('#numbers');
//이전버튼
let prevPageBtn = document.querySelector('.pagination .prev');
//다음버튼
let nextPageBtn = document.querySelector('.pagination .next');
//현재 보고있는 페이지그룹 번호
let pageActiveIndex = 0;
//현재 보고있는 페이지 번호
let currentPageNum = 0;
//한번에 보여줄 페이지 그룹 최대 개수
let maxPageNum = 4;

//페이지네이션 생성
/*
대상.innerHTML = <li><a href="">2</a></li>
for(초기값;조건;증감){
}
*/
for (let i = 1; i <= pageCount; i++) {
  numbers.innerHTML += ` <li><a href="">${i}</a></li>`
};
//생선된 페이지 번호 가져오기
let numbersBtn = numbers.querySelectorAll('a');

//각 페이지 번호를 클릭시 처리하는 함수
numbersBtn.forEach((item, idx) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    currentPageNum = idx;
    pageActiveIndex = Math.floor(idx / maxPageNum);

    displayRow(idx);
    displayPage(pageActiveIndex);
  })
});

//현재 페이지의 행을 보여주는 함수
function displayRow(idx) {
  //해당 페이지 시작 인덱스
  let start = idx * rowPerPage;
  //해당 페이지 끝 인덱스
  let end = start + rowPerPage;
  //스프레드 연산자
  let rowsArray = [...rows];
  //다 숨기고
  for (ra of rowsArray) {
    ra.style.display = 'none';
  }
  //현재 페이지에 해당하는 행만 표시
  let newRows = rowsArray.slice(start, end);

  console.log(newRows);

  for (nr of newRows) {
    nr.style.display = ''
  }
  //선택된 페이지 강조 표시
  //먼저 다 지우기
  for (nb of numbersBtn) {
    nb.classList.remove('active');
  }
  //해당 인덱스만 클래스 추가
  numbersBtn[idx].classList.add('active');
}

displayRow(0);
//페이지 그룹 개수 계산
let totalPageCount = Math.ceil(pageCount / maxPageNum);
//페이지 그룹을 보여주는 함수
function displayPage(num) {
  //모든 페이지 번호 담는 배열
  let pageArr = [...numbersBtn];
  //전부 숨기기
  pageArr.forEach(item => {
    item.parentElement.style.display = 'none';
  });
  //시작페이지 번호
  let start = num * maxPageNum;
  //끝 페이지 번호
  let end = start + maxPageNum;
  let pageListArr = pageArr.slice(start, end);


  //현재 그룹만 보이기
  pageListArr.forEach(item => {
    item.parentElement.style.display = '';
  });
}

displayPage(0);

//다음페이지 버튼 클릭시
nextPageBtn.addEventListener('click', () => {
  //만약에 현재 보고있는 페이지 번호가 전체페이지수에 -1한 값보다 크거나 같으면 반환한다

  if (currentPageNum >= pageCount - 1) return;

  currentPageNum++;

  displayRow(currentPageNum);
});

//이전페이지 버튼 클릭시
prevPageBtn.addEventListener('click', () => {

  //현재 보고있는 페이지가 1 작아진다
  if (currentPageNum <= 0) return;

  currentPageNum--;

  displayRow(currentPageNum);
});

console.log(nextPageBtn);
console.log(prevPageBtn);
window.dispatchEvent(new Event('resize'));

//DOMContentLoaded 이벤트가 발생하면, 콜백함수 실행
document.addEventListener('DOMContentLoaded', function(){
  //검색창를 id값으로 가져오기
  let payrollSearch = document.querySelector('#searchBox');
  //테이블의 tbody를 id값으로 가져오기
  let payrollTable = document.querySelector('#noticeTable tbody');

  //검색창에 keyup이벤트 세팅. 글자 입력시마다 발생
  payrollSearch.addEventListener('keyup', function(){
    //사용자가 입력한 검색어의 value값을 가져와 소문자로 변경하여 filterValue에 저장
    let filterValue = payrollSearch.value.toLowerCase();
    //현재 tbody 안에 있는 모든 tr을 가져와 rows에 저장
    let rows = payrollTable.querySelectorAll('tr');

    //tr을 for문으로 순회
    for(var i = 0; i < rows.length; i++){
      //현재 순회중인 tr의 textcontent를 소문자로 변경하여 rowText에 저장
      var rowsText = rows[i].textContent.toLowerCase();
      //rowText가 filterValue를 포함하면, 해당 tr은 보여지게하고, 그렇지않으면 숨긴다
      if(rowsText.includes(filterValue)){
        rows[i].style.display = '';
      }else{
        rows[i].style.display = 'none';
      }
    }
  });
});


















//탑버튼
let topBtn = document.querySelector('.top_btn');

window.addEventListener('scroll', function () {
  if (window.scrollY > 1300) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

topBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//푸터
let familyToggle = document.querySelector('.family_toggle');
familyToggle.addEventListener('click', function () {
  familyToggle.classList.toggle('active');
});
