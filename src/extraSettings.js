/**
 * 성명, 본 프로젝트는 단지 여러분의 기술 및 오락에 도움을 줄 뿐입니다. 절대 수정된 웹사이트를 대규모로 전파 및 상용하여 침해로부터 자유로워지지 마십시오!
 */

// 추가 점수: 숫자 수정
let extraScore = 1;

// 무적 모드: true false로 변경
let wuDi = true;

// 첫 번째 과일: 0-10, 0은 포도, 9는 수박 반쪽
let firstFruit = 0;

// 과일 합성 반전: false를 true로 변경
let reverseLevelUp = false;

// 생성된 과일 지정: 기본값: 반전 0-5를 켜지 않고 반전 6-11을 켜고 해당 숫자를 수정하면 임의 생성된 것을 제어할 수 있습니다.과일 범위
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 무작위 과일 생성 최소치(0-10)0 포도를 위해, 9는 수박 반쪽이다.
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 무작위 과일 생성 최대치(1-11)0은 포도이고, 9는 수박 반쪽이다.
let setFruits = {
  // 지정 전에 생성된 과일은 임의의 수량을 채울 수 있으며 0은 포도, 9는 수박 반쪽입니다
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return (
      minRandomFruitNum +
      Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum))
    );
  },
};

// 과일을 더Q탄: false를 0보다 작은 임의의 소수(0.9 추천)로 변경
let fruitQTan = false;

// 과일의 낙하를 더디게 하기 : false를 0보다 큰 임의의 수로 변경하고, 값이 클수록 저항이 커지며, 낙하가 느려집니다 (5 추천)
let fruitSlowDown = false;

// 오른쪽 위 아이콘을 눌러 과일 교환: false를 true로 변경하시면 됩니다
let clickChangeFruit = true;

// 광고 링크: false 또는 위 빈 문자열은 광고로 넘어가지 않음을 나타냅니다
let adLink =
  "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/yupi_wechat.png";

// 웹페이지 제목 수정: "SWU 기독 서랑제"으로 대체
document.getElementsByTagName("title")[0].innerText = "SWU 기독 서랑제";

// 팝업 창 열기: false를 true로 변경
let selectModal = false;
