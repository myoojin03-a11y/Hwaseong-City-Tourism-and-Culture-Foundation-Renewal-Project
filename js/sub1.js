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

//메인이미지
var mainImgSwiper = new Swiper(".mainImgSwiper", {
  navigation: {
    nextEl: ".mainImgSwiper-button-next",
    prevEl: ".mainImgSwiper-button-prev",
  },
});

//투어액티비티
var tourActivitySwiper = new Swiper(".tourActivitySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,

  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },

  navigation: {
    nextEl: ".tourActivitySwiper-button-next",
    prevEl: ".tourActivitySwiper-button-prev",
  },
});


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



/* 찾아오시는 길 */
var directionsMap = new naver.maps.Map('directionsMap', {
  center: new naver.maps.LatLng(37.171131, 126.624615),
  zoom: 15,
  maxZoom: 16
});

var directionsMarker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.171131, 126.624615),
  map: directionsMap,
  icon: {
    url: '../image/contom_marker.png',
    size: new naver.maps.Size(42, 58),
    anchor: new naver.maps.Point(21, 58)
  }
});

// 네이버 지도 연결
naver.maps.Event.addListener(directionsMarker, 'click', function () {
  window.open('https://naver.me/xa5AMneL', '_blank');
});

/* 주변정보 */

//변수등록
let placeItemTab = document.querySelectorAll('.place_item');
let places = document.querySelectorAll('.places');
let whole = document.querySelector('.whole');

//각 탭에 클릭 이벤트 추가
placeItemTab.forEach(function (tab) {
  tab.addEventListener('click', function () {
    //모든 탭 active 삭제
    placeItemTab.forEach(function (t) {
      t.classList.remove('active');
    });
    //모든 리스트 active 삭제
    places.forEach(function (pl) {
      pl.classList.remove('active');
    });
    //클릭한 탭에 active 추가
    this.classList.add('active');
    //클릭한 탭이 가진 data-tab값으로 해당 내용만 보여주기
    let targetId = this.getAttribute('data-tab');
    let targetTab = document.getElementById(targetId);

    if (targetTab) {
      targetTab.classList.add('active');
    }
    //전체탭일땐 모든 리스트가 보이기
    if (targetId === 'whole') {
      places.forEach(function (all) {
        all.classList.add('active');
      });
      whole.classList.add('active');
    } else {
      whole.classList.remove('active');
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
