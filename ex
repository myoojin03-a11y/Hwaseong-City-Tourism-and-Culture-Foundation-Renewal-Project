document.addEventListener("DOMContentLoaded", () => {
  // 1) 탭 버튼 / wrapper 선택
  const tabButtons = document.querySelectorAll(".newsTab_list .tab_item");
  const wrapper = document.querySelector(".news_swiper .swiper-wrapper");

  // 2) 카테고리별 mock 데이터(포폴용)
  //    - 너가 나중에 제목/날짜만 바꿔서 늘리면 됨
  const newsData = {
    notice: [
      { label: "공지사항", title: "엄태정조각전 '낮선자의 포에지' 전시연계 웰니스 프로그램 <미술관요가>", date: "2025.11.17" },
      { label: "공지사항", title: "2025 화성메세나 아트페어 참여 예술가 공모 결과 발표", date: "2025.11.17" },
      { label: "공지사항", title: "2025 꿈의 무용단 '화성' 울트라화성 제2회 정기공연 <안녕! 지구>", date: "2025.11.12" },
      { label: "공지사항", title: "2025 일상 예술활동 지원 사업 자유공간 + 성과공유전", date: "2025.11.12" },
      { label: "공지사항", title: "재단 홈페이지 점검 안내", date: "2025.11.10" },
      { label: "공지사항", title: "문화누리카드 사용 안내", date: "2025.11.08" },
    ],

    // ✅ HTML이 carr**e**r 아니라 carr**er**라서 키도 carrer로 맞춤
    carrer: [
      { label: "채용정보", title: "화성문화관광재단 기간제 근로자 채용 공고", date: "2025.11.15" },
      { label: "채용정보", title: "문화사업팀 행정 보조 채용 안내", date: "2025.11.13" },
      { label: "채용정보", title: "전시 운영 스태프 모집", date: "2025.11.11" },
      { label: "채용정보", title: "공연장 안내데스크 채용", date: "2025.11.09" },
    ],

    announce: [
      { label: "공고", title: "시설 안전 점검 용역 입찰 공고", date: "2025.11.16" },
      { label: "공고", title: "홍보물 제작 업체 선정 공고", date: "2025.11.12" },
      { label: "공고", title: "공연장 음향 장비 구매 공고", date: "2025.11.10" },
      { label: "공고", title: "전시 조명 렌탈 공고", date: "2025.11.08" },
    ],

    press: [
      { label: "보도자료", title: "지역 예술가 지원 사업 성과 발표", date: "2025.11.14" },
      { label: "보도자료", title: "웹진 68호 발간 소식", date: "2025.11.12" },
      { label: "보도자료", title: "가을 문화행사 성황리 종료", date: "2025.11.09" },
      { label: "보도자료", title: "시민 참여 프로그램 확대 운영", date: "2025.11.07" },
    ],

    externalCall: [
      { label: "외부공모안내", title: "2025 생활문화 동아리 지원 공모 안내", date: "2025.11.18" },
      { label: "외부공모안내", title: "예술 창작 지원금 공모 안내", date: "2025.11.12" },
      { label: "외부공모안내", title: "청년 예술인 프로젝트 공모", date: "2025.11.09" },
      { label: "외부공모안내", title: "지역 문화기획 공모 안내", date: "2025.11.05" },
    ],
  };

  // 3) box 하나(카드 하나) HTML 만드는 함수
  //    - 네 기존 마크업(.box > h4, p, time) 그대로 생성
  const renderBox = (item) => {
    // 제목에서 줄바꿈 넣고 싶으면 여기서 <br> 처리도 가능
    const safeTitle = item.title.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    return `
      <div class="box">
        <h4>${item.label}</h4>
        <p>${safeTitle}</p>
        <time datetime="">
          <i class="fas fa-calendar-alt"></i>${item.date}
        </time>
      </div>
    `;
  };

  // 4) "슬라이드 1장에 box 2개" 구조로 슬라이드들을 다시 그리는 함수
  const renderSlides = (categoryKey) => {
    const items = newsData[categoryKey] ?? [];

    // wrapper 비우기
    wrapper.innerHTML = "";

    // 데이터가 없으면 빈 상태 안내(원하면 디자인 가능)
    if (items.length === 0) {
      wrapper.innerHTML = `
        <div class="swiper-slide">
          <div class="box">
            <h4>안내</h4>
            <p>등록된 게시글이 없습니다.</p>
            <time datetime=""><i class="fas fa-calendar-alt"></i>-</time>
          </div>
        </div>
      `;
      return;
    }

    // 2개씩 묶어서 슬라이드 생성
    for (let i = 0; i < items.length; i += 2) {
      const first = items[i];
      const second = items[i + 1]; // 없을 수도 있음(홀수일 때)

      const slideHTML = `
        <div class="swiper-slide">
          ${renderBox(first)}
          ${second ? renderBox(second) : ""}
        </div>
      `;

      wrapper.insertAdjacentHTML("beforeend", slideHTML);
    }
  };

  // 5) Swiper 초기화
  const newsSwiper = new Swiper(".news_swiper", {
    slidesPerView: 1, // 네 구조는 "한 슬라이드에 box 2개"라서 view는 1이 자연스러움
    spaceBetween: 20,
    navigation: {
      prevEl: ".news_swiper-button-prev",
      nextEl: ".news_swiper-button-next",
    },
  });

  // 6) 탭 클릭 시: active 처리 + 슬라이드 재렌더 + swiper 업데이트
  const setActiveTab = (btn) => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const clicked = e.currentTarget;
      const key = clicked.dataset.tab; // notice / carrer / announce ...

      setActiveTab(clicked);
      renderSlides(key);

      // Swiper에게 "슬라이드 바뀌었음" 알려주기
      newsSwiper.update();
      newsSwiper.slideTo(0); // 탭 바꾸면 항상 첫 장부터 보여주기(원하면 제거 가능)
    });
  });

  // 7) 첫 화면: active 탭 기준으로 초기 렌더
  const initialActive = document.querySelector(".newsTab_list .tab_item.active");
  const initialKey = initialActive?.dataset.tab ?? "notice";
  renderSlides(initialKey);
  newsSwiper.update();
});


//문화공간
const culturalSwipers = [];

document.querySelectorAll(".culturalSwiper").forEach((el) => {
  const swiper = new Swiper(el, {
    slidesPerView: 3,
    spaceBetween: 180,
    centeredSlides: true,
    initialSlide: 1,
    navigation: {
      // ✅ 각 swiper 내부 버튼을 찾게 만들어야 충돌 안 남
      nextEl: el.querySelector(".culturalSwiper-button-next"),
      prevEl: el.querySelector(".culturalSwiper-button-prev"),
    },
    on: {
      // (선택) 탭에서 display:none -> block 되었을 때 레이아웃 재계산
      init() { this.update(); },
    }
  });

  culturalSwipers.push(swiper);
});

/* ✅ 탭 전환 시 (display:none -> block) Swiper는 update가 필요함
   네 탭 버튼 로직에서 "보여줄 탭을 표시한 직후" 아래를 호출해줘.
*/
function updateAllCulturalSwipers(){
  culturalSwipers.forEach(sw => sw.update());
}