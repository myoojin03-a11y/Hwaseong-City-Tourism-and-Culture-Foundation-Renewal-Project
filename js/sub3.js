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

//포스터
let posterData = [
  {
    id: 1,
    image: "image/poster01.png",
    title: "전통과 현대의 미학<br><서영기 달항아리展>",
    period: "2025.09.30 ~ 2025.12.31",
    time: "10:00~17:00",
    place: "화성시민대학",
    ticket: "무료",
    ageRating: "전체관람가",
    status: "진행중",
    category: "전시"
  },
  {
    id: 2,
    image: "image/poster02.png",
    title: "호두까기인형 갈라 2025",
    period: "2025.12.27 ~ 2025.12.28",
    time: "27·28일 / 총 3회",
    place: "반석아트홀",
    ticket: "좌석별 상이",
    ageRating: "48개월 이상 가능",
    status: "진행예정",
    category: "공연"
  },
  {
    id: 3,
    image: "image/poster03.png",
    title: "화성시 향토무형문화재 제1호 승무<br>지정기획 축하공연 [맥을 잇다]",
    period: "2025.12.27 ~ 2025.12.27",
    time: "16:00",
    place: "화성아트홀",
    ticket: "상세페이지 확인",
    ageRating: "만 5세 이상 관람가",
    status: "진행예정",
    category: "공연"
  },
  {
    id: 4,
    image: "image/poster04.png",
    title: "경기도 쉼표 하나,<br>도심 속 작은 음악회",
    period: "2025.09.30",
    time: "10:00~17:00",
    place: "화성시민대학",
    ticket: "무료",
    ageRating: "전체관람가",
    status: "진행예정",
    category: "공연"
  },
  {
    id: 5,
    image: "image/poster05.png",
    title: "2025 화성시문화관광재단 하반기<br>기획공연",
    period: "2025.12.20 ~ 2025.12.20",
    time: "공연별 상이",
    place: "공연별 상이",
    ticket: "공연별 상이",
    ageRating: "공연별 상이",
    status: "진행예정",
    category: "공연"
  },
  {
    id: 6,
    image: "image/poster06.png",
    title: "발레 <호두까기 인형>",
    period: "2025.12.20 ~ 2025.12.20",
    time: "14:00~18:00",
    place: "화성아트",
    ticket: "좌석별 상이",
    ageRating: "48개월 이상 관람가",
    status: "진행예정",
    category: "공연"
  },
  {
    id: 7,
    image: "image/poster07.png",
    title: "응답하라, 시간을 걷는 아이들",
    period: "2025.12.19 ~ 2025.12.19",
    time: "17:00",
    place: "누림아트홀",
    ticket: "무료",
    ageRating: "전체관람가",
    status: "진행예정",
    category: "공연"
  },
  {
    id: 8,
    image: "image/poster08.png",
    title: "오늘 기분 JAZZ",
    period: "2025.12.16 ~ 2025.12.16",
    time: "17:30",
    place: "화성아트홀",
    ticket: "무료",
    ageRating: "만 7세 이상 관람가",
    status: "진행중",
    category: "공연"
  },
  {
    id: 9,
    image: "image/poster09.png",
    title: "열 두 줄에 실어 나빌레라 II",
    period: "2025.12.16 ~ 2025.12.16",
    time: "19:30",
    place: "반석아트홀",
    ticket: "전석 20,000원",
    ageRating: "만 5세 이상 관람가",
    status: "진행중",
    category: "공연"
  },
  {
    id: 10,
    image: "image/poster10.png",
    title: "크리스마스 캐롤",
    period: "2025.12.14 ~ 2025.12.14",
    time: "14일 / 총 3회",
    place: "누림아트홀",
    ticket: "전석 40,000원",
    ageRating: "전체관람가",
    status: "진행종료",
    category: "공연"
  }
]

//포스터 html 구조
let posterList = document.querySelector('.poster_list');

function renderPoster(list) {
  posterList.innerHTML = '';


  list.forEach(data => {
    let poster = `
         <div class="poster" data-id="${data.id}">
                    <div class="img_wrap">
                        <div class="img_label">
                            <div class="status_label">${data.status}</div>
                            <div class="category_label">${data.category}</div>
                        </div>
                        <img src="${data.image}" alt="전통과 현대의 미학 &lt;서영기 달항아리展&gt; 기획전시2·3 이미지">
                    </div>
                    <div class="text_wrap">
                        <p class="poster_title">${data.title}
                        </p> 
                        <ul class="info_wrap"> 
                            <li class="info_item">
                                <span class="info_label">기간</span>
                                <span class="info_value">${data.period}</span>
                            </li>
                            <li class="info_item">
                                <span class="info_label">시간</span>
                                <span class="info_value">${data.time}</span>
                            </li>
                            <li class="info_item">
                                <span class="info_label">장소</span>
                                <span class="info_value">${data.place}</span>
                            </li>
                            <li class="info_item">
                                <span class="info_label">티켓</span>
                                <span class="info_value">${data.ticket}</span>
                            </li>
                            <li class="info_item">
                                <span class="info_label">관람등급</span>
                                <span class="info_value">${data.ageRating}</span>
                            </li>
                        </ul>

                        <div class="more_btn_wrap">
                            <a href="#none" class="more_btn">자세히보기</a>
                        </div>
                    </div>
                </div>
    `;
    posterList.innerHTML += poster;
  });
  labelColorCheange();
}
renderPoster(posterData);

//필터탭
let filterItems = document.querySelectorAll('.check_list li');
console.log(filterItems);

filterItems.forEach(item => {
  item.addEventListener('click', function () {
    //형제탭
    let siblings = this.parentElement.querySelectorAll('li');
    //전체탭인지 확인
    let isAll = this.textContent.trim() === '전체';
    //전체탭
    let allTab = siblings[0];

    if (isAll) {
      //전체를 클릭했을땐 다른 필터 active 해제하고 전체는 active
      siblings.forEach(li => li.classList.remove('active'));
      this.classList.add('active');
    } else {
      //필터 클릭했을때 active
      this.classList.toggle('active');
      //전체 active 제거
      siblings[0].classList.remove('active');
      //active가 없을땐 전체 active
      let isActive = Array.from(siblings).slice(1).some(li => li.classList.contains('active'));
      if (!isActive) {
        allTab.classList.add('active');
      }
    }
    applyFilter();
  });
});

//필터링
function getActiveFilters() {
  // 필터탭 전체 선택
  let filterCheck = document.querySelectorAll('.check_list')

  // 반환할 필터 값 
  let filters = {
    place: [],      // 장소 필터
    status: [],     // 진행상태 필터
    category: [],    // 분류 필터
  };

  // 필터마다 같은 것 나오기
  filterCheck.forEach(group => {
    // 현재 필터 그룹의 종류 확인
    let title = group.dataset.filter;

    // 현재 그룹 안에서 active 된 li만 선택
    let activeItem = group.querySelectorAll('li.active');

    // active 된 항목들 다시 하나씩 확인
    activeItem.forEach(item => {

      //  "전체" 탭은 실제 필터 조건에서 제외
      // (전체는 '필터 안 함' 의미라서)
      if (item.textContent.trim() !== '전체') {
        //  필터 종류(title)에 맞는 배열에 값 추가
        // 예: filters["place"].push("화성아트홀")
        filters[title].push(item.textContent.trim());
      }
    });
  });
  // 모든 필터 그룹을 검사한 뒤 결과 반환
  return filters;
}

//필터 적용 함수
function applyFilter() {
  let filters = getActiveFilters();

  let filteredData = posterData.filter(item => {

    //장소
    if (filters.place.length > 0 && !filters.place.includes(item.place)) {
      return false;
    }
    //진행상태
    if (filters.status.length > 0 && !filters.status.includes(item.status)) {
      return false;
    }
    //장소
    if (filters.category.length > 0 && !filters.category.includes(item.category)) {
      return false;
    }
    return true;
  });
  renderPoster(filteredData);

  console.log('필터 결과:', filteredData)
}

// 필터 초기화
function resetFilters() {
  let filterItems = document.querySelectorAll('.check_list li');

  filterItems.forEach(item => {
    item.classList.remove('active');
  });

  let filterGroups = document.querySelectorAll('.check_list');
  filterGroups.forEach(group => {
    group.querySelector('li:first-child').classList.add('active');
  });
}


function labelColorCheange() {
  // 라벨명에 따라 컬러 체인지
  let statusLabels = document.querySelectorAll('.status_label');
  let categoryLabels = document.querySelectorAll('.category_label');
  let imgOveray = document.querySelectorAll('.poster .img_wrap');

  /* 진행상태별 컬러 */
  statusLabels.forEach((label, index) => {
    let statusText = label.textContent.trim();

    if (statusText === "진행예정") {
      label.classList.add('upcoming');
    }

    if (statusText === "진행종료") {
      label.classList.add('closed');
      imgOveray[index].classList.add('closed');
    }
  });

  /* 카테고리 라벨별 컬러 */
  categoryLabels.forEach((label, index) => {
    let categorText = label.textContent.trim();

    if (categorText === "공연") {
      label.classList.add('play');
    }

    if (categorText === "행사") {
      label.classList.add('event');
    }
  });
}

//서치탭 검색기능
//DOMContentLoaded 이벤트가 발생하면, 검색 함수 실행
document.addEventListener('DOMContentLoaded', function () {
  //검색창 가져오기
  let payrollSearch = document.querySelector('#searchInput');
  //poster_list 가져오기
  let payrollTable = document.querySelector('#eventList .poster_list');
  //search_btn 가져오기
  let searchBtn = document.querySelector('#searchBtn');

  //searchPoster()검색 함수
  function searchPoster() {
    //사용자가 입력한 검색어의 value값을 가져와 소문자로 변경하여 filterValue에 저장
    let filterValue = payrollSearch.value.toLowerCase();
    //현재 poster_list 안에 있는 모든 poster를 가져와 posters에 저장
    let posters = payrollTable.querySelectorAll('.poster');

    //결과체크
    let result = false;

    //poster 하나씩 검사
    for (var i = 0; i < posters.length; i++) {
      //현재 순회중인 tr의 textcontent를 소문자로 변경하여 rowText에 저장
      let posterText = posters[i].textContent.toLowerCase();
      //rowText가 filterValue를 포함하면, 해당 poster은 보여지게하고, 그렇지않으면 숨긴다
      if (posterText.includes(filterValue)) {
        posters[i].style.display = '';
      } else {
        posters[i].style.display = 'none';
      }
    }

  }

  //엔터키 눌렀을때만 검색
  payrollSearch.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchPoster();
    }
  });
  //검색버튼 클릭시도 검색
  searchBtn.addEventListener('click', function () {
    searchPoster();
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
