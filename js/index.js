/* 포트폴리오 안내 팝업창 */
// 요소 불러오기
let dimmed = document.querySelector('.dimmed');
let gradientWrap = document.querySelector('.gradient_wrap');
let popupCloseBtn = document.querySelector('.popup_close_btn');

window.onload = function () {
  // sessionStorage에 기록이 없으면 팝업을 보여줌 (새로고침 시 안 뜸)
  if (!sessionStorage.getItem('popupSeen')) {
    openPopup();
  }

  closePopup();
};

function openPopup() {
  gradientWrap.style.display = "block";
  dimmed.style.display = "block";
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  popupCloseBtn.addEventListener('click', function () {
    gradientWrap.style.display = "none";
    dimmed.style.display = "none";
    document.body.style.overflow = 'auto';

    // 팝업 닫았다는 기록을 sessionStorage에 저장
    // (현재 탭이 살아 있는 동안만 유지됨)
    sessionStorage.setItem('popupSeen', 'true');
  });
}



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



/* 행사안내 */
var eventSwiper = new Swiper(".eventSwiper", {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: -20,
  centeredSlides: true,
  initialSlide: 1,

  breakpoints: {
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 20,
      centeredSlides: false,
    }
  },

  navigation: {
    nextEl: ".eventSwiper-button-next",
    prevEl: ".eventSwiper-button-prev",
  },
});

/* 자주찾는서비스 */
var QuickSwiper = new Swiper(".QuickSwiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 10,

  grid: {
    rows: 2,
    fill: "row"
  },

  breakpoints: {
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 20,
      grid: { rows: 1 }
    },
  },

  navigation: {
    prevEl: ".QuickSwiper-button-prev",
    nextEl: ".QuickSwiper-button-next",
  },
});


/* 비주얼 */
//히어로 행사 스와이퍼
var event_swiper = new Swiper(".hero_event_swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  pagination: {
    el: ".hero_event_swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      const c = String(current).padStart(2, "0");
      const t = String(total).padStart(2, "0");

      return `
        <span class="swiper-pagination-current">${c}</span>
        <span class="fraction-dash"></span>
        <span class="swiper-pagination-total">${t}</span>
      `;
    },
  },
  navigation: {
    nextEl: ".hero_event_swiper-button-next",
    prevEl: ".hero_event_swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 5000,
  }
});

//히어로 공지 스와이퍼
var notice_swiper = new Swiper(".hero_notice_swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  pagination: {
    el: ".hero_notice_swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      const c = String(current).padStart(2, "0");
      const t = String(total).padStart(2, "0");

      return `
        <span class="swiper-pagination-current">${c}</span>
        <span class="fraction-dash"></span>
        <span class="swiper-pagination-total">${t}</span>
      `;
    },
  },
  navigation: {
    nextEl: ".hero_notice_swiper-button-next",
    prevEl: ".hero_notice_swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 5000,
  }
});
/* notice_swiper.autoplay.stop();  */

//data-swiper 값으로 변환
const swiperMap = {
  event: event_swiper,
  notice: notice_swiper,
};

//재생/정지 버튼에 이벤트
document.querySelectorAll('.swiper-button-pause').forEach(btn => {
  const icon = btn.querySelector('i');
  const target = btn.dataset.swiper;   // event | notice
  const swiper = swiperMap[target];    // 이미 만든 swiper

  btn.addEventListener('click', () => {
    const isPause = icon.classList.contains('fa-pause');

    icon.classList.toggle('fa-pause', !isPause);
    icon.classList.toggle('fa-play', isPause);

    if (isPause) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  });
});



/* 관광지 소개 - PC 버전 */
const thumbs = document.querySelectorAll('.thumb');
const slideImgs = document.querySelectorAll('.tourSpotSwiper .swiper-slide img');
const playBtn = document.getElementById('play');

let isPlaying = true;

const tourSpotSwiper = new Swiper('.tourSpotSwiper', {
  speed: 600,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.fraction',
    type: 'fraction',

    renderFraction(currentClass, totalClass) {
      return `
        <span class="${currentClass} blue"></span>
        <span class="dash">-</span>
        <span class="${totalClass}"></span>
      `;
    },

    formatFractionCurrent: n => String(n).padStart(2, '0'),
    formatFractionTotal: n => String(n).padStart(2, '0'),
  },

  on: {
    slideChange() {
      setActive(this.realIndex);
    }
  }
});
//css하는동안 잠깐 멈추기
/* tourSpotSwiper.autoplay.stop(); */

function setActive(index) {
  thumbs.forEach(thumb => {
    thumb.classList.remove('active');
    thumb.style.backgroundImage = '';
  });

  const activeThumb = thumbs[index];
  if (!activeThumb) return;

  const imgSrc = activeThumb.dataset.img;

  activeThumb.classList.add('active');
  activeThumb.style.backgroundImage = `url(${imgSrc})`;

  if (slideImgs[index]) slideImgs[index].src = imgSrc;

  if (tourSpotSwiper.realIndex !== index) {
    tourSpotSwiper.slideTo(index);
  }
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener('mouseenter', () => {
    if (!thumb.classList.contains('active')) {
      thumb.style.backgroundImage = `url(${thumb.dataset.img})`;
    }
  });

  thumb.addEventListener('mouseleave', () => {
    if (!thumb.classList.contains('active')) {
      thumb.style.backgroundImage = '';
    }
  });

  thumb.addEventListener('click', () => {
    setActive(index);
  });
});

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    tourSpotSwiper.slidePrev();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    tourSpotSwiper.slideNext();
  });
}

if (playBtn) {
  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;

    const icon = playBtn.querySelector('i');
    if (!icon) return;

    if (isPlaying) {
      icon.className = 'fa-solid fa-pause';
      tourSpotSwiper.autoplay.start();
    } else {
      icon.className = 'fa-solid fa-play';
      tourSpotSwiper.autoplay.stop();
    }
  });
}

setActive(0);


/* 관광지 소개 - 모바일 버전 */
// 코드 짜는 중이면 true, 배포 시 false
const DEV_PAUSE_AUTOPLAY = false;

const tabs = document.querySelectorAll('.tab');
const slides = document.querySelectorAll('.mobile-slide');

let currentIndex = 0;
let isMobilePlaying = true;
let mobileAutoplayInterval = null;



function updateProgressBar() {
  const progressPercent = ((currentIndex + 1) / slides.length) * 100;

  slides.forEach((slide) => {
    const progressFill = slide.querySelector('.progress-fill');
    if (progressFill) progressFill.style.width = progressPercent + '%';
  });
}

//  fromUser일 때만 scrollIntoView 실행 (새로고침 시 관광지로 튐 방지)
function showSlide(index, fromUser = false) {
  if (!slides.length || !tabs.length) return;

  slides.forEach(slide => slide.classList.remove('active'));
  tabs.forEach(tab => tab.classList.remove('active'));

  const targetSlide = slides[index];
  const targetTab = tabs[index];
  if (!targetSlide || !targetTab) return;

  targetSlide.classList.add('active');
  targetTab.classList.add('active');

  if (fromUser) {
    targetTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  currentIndex = index;
  updateProgressBar();
}

function nextSlide(fromUser = false) {
  const newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex, fromUser);
}

function prevSlide(fromUser = false) {
  const newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex, fromUser);
}

function startAutoplay() {
  stopAutoplay();
  mobileAutoplayInterval = setInterval(() => {
    nextSlide(false);
  }, 3000);
}

function stopAutoplay() {
  if (mobileAutoplayInterval) {
    clearInterval(mobileAutoplayInterval);
    mobileAutoplayInterval = null;
  }
}

//  재생 중이면 ⏸, 정지면 ▶ 로 보이게 통일
function syncMobilePlayIcons() {
  slides.forEach(slide => {
    const icon = slide.querySelector('.control-btn:first-child i');
    if (!icon) return;

    icon.className = isMobilePlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
  });
}

// 재생 중(true)에서 누르면 → 멈추고( false ) → ▶
// 멈춘 상태(false)에서 누르면 → 재생( true ) → ⏸
function toggleAutoplay() {
  isMobilePlaying = !isMobilePlaying;

  if (isMobilePlaying) {
    startAutoplay();
  } else {
    stopAutoplay();
  }

  syncMobilePlayIcons();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    showSlide(index, true);

    // 사용자가 조작했을 때 재생 중이면 타이머 리셋
    if (isMobilePlaying) startAutoplay();
  });
});

slides.forEach((slide) => {
  const buttons = slide.querySelectorAll('.control-btn');
  if (buttons.length < 3) return;

  // 0: 재생/일시정지
  buttons[0].addEventListener('click', () => {
    toggleAutoplay();
  });

  // 1: 이전
  buttons[1].addEventListener('click', () => {
    prevSlide(true);
    if (isMobilePlaying) startAutoplay();
  });

  // 2: 다음
  buttons[2].addEventListener('click', () => {
    nextSlide(true);
    if (isMobilePlaying) startAutoplay();
  });
});

/* //  초기 상태: 0번 보여주고, 자동재생 시작, 아이콘은 ⏸
showSlide(0, false);
startAutoplay();
syncMobilePlayIcons(); */
showSlide(0, false);

if (DEV_PAUSE_AUTOPLAY) {
  // 코드 작업용: 자동재생 멈춤
  isMobilePlaying = false;
  stopAutoplay();
} else {
  // 실제 서비스용: 자동재생 시작
  isMobilePlaying = true;
  startAutoplay();
}

syncMobilePlayIcons();





/* 문화공간 */
document.addEventListener('DOMContentLoaded', () => {
  // 이 값이 "기본으로 돌아갈 센터 슬라이드" (0부터 시작)
  const RESET_INDEX = 1; // = 2번째 슬라이드

  // Swiper 초기화
  const swiperContainers = document.querySelectorAll('.culturalSwiper');
  const swiperInstances = new Map(); // el -> swiper

  swiperContainers.forEach((el) => {
    const swiper = new Swiper(el, {
      observer: true,
      observeParents: true,

      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      initialSlide: RESET_INDEX,

      allowTouchMove: true,

      breakpoints: {
        // 화면 너비 768px 이하일 때 
        768: {
          slidesPerView: 1,
        },
        // 화면 너비 1024px 이하일 때 
        1024: {
          slidesPerView: 3,
          spaceBetween: 180,
        },
      },

      navigation: {
        nextEl: el.querySelector('.culturalSwiper-button-next'),
        prevEl: el.querySelector('.culturalSwiper-button-prev'),
      },
      pagination: {
        el: el.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });

    swiperInstances.set(el, swiper);
  });

  // 탭
  const tabButtons = document.querySelectorAll('.tab_item');
  const contents = document.querySelectorAll('.culturalSwiper');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      tabButtons.forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      contents.forEach((con) => con.classList.remove('active'));

      const targetId = this.dataset.tab;
      const targetSwiperEl = document.getElementById(targetId);
      if (!targetSwiperEl) return;

      targetSwiperEl.classList.add('active');

      // 보이게 만든 다음, update + "초기 상태로 리셋"
      requestAnimationFrame(() => {
        const swiper = swiperInstances.get(targetSwiperEl);
        if (!swiper) return;

        swiper.update();

        // 레이아웃 반영 한 박자 뒤에 확실히 리셋
        setTimeout(() => {
          swiper.update();
          swiper.slideTo(RESET_INDEX, 0); // 돌아올 때마다 2번째가 센터
        }, 0);
      });
    });
  });

  // 첫 로드 시 active swiper도 업데이트 (초기 표시 안정화)
  const firstActive = document.querySelector('.culturalSwiper.active');
  if (firstActive) {
    requestAnimationFrame(() => {
      const swiper = swiperInstances.get(firstActive);
      if (swiper) {
        swiper.update();
        swiper.slideTo(RESET_INDEX, 0);
      }
    });
  }
});



// 재단소식 스와이퍼
var swiper = new Swiper(".news_swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".news_swiper-button-next",
    prevEl: ".news_swiper-button-prev",
  },
});
let newsTabButtons = document.querySelectorAll('.news_tab_item');
let newsSwiper = document.querySelectorAll('.news_swiper');
//각 탭에 클릭 이벤트 추가
newsTabButtons.forEach(function (tab) {
  tab.addEventListener('click', function () {
    //모든 탭 active 제거
    newsTabButtons.forEach(function (t) {
      t.classList.remove('active');
    });
    //모든 스와이퍼 active 삭제
    newsSwiper.forEach(function (sw) {
      sw.classList.remove('active');
    });
    //클릭한 탭에 active 추가
    this.classList.add('active')
    //클릭한 탭이 가진 data-tab값으로 해당 내용만 보여주기
    let targetId = tab.getAttribute('data-tab');
    let targetSwiper = document.getElementById(targetId);

    if (targetSwiper) {
      targetSwiper.classList.add('active');
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




