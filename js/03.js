//#picSet #pic1
let picWidth = 1440;
// 숫자 + 문자 연결연산자 "2880px"
// document.getElementById("pic0").style.left = picWidth * 0 + "px"; // 0
// document.getElementById("pic1").style.left = picWidth * 1 + "px"; // 1440px
// document.getElementById("pic2").style.left = picWidth * 2 + "px"; // 2880px

// 문자 + 숫자 ----> 연결연산자
for (var i = 0; i < 3; i++) {
  document.getElementById("pic" + i).style.left = 1440 * i + "px";
}
let moveNum = 0;
document.getElementById("prev_btn").onclick = function () {
  //   document.getElementById("pic0").style.left = 1440 * 1 + "px";
  //   document.getElementById("pic1").style.left = 1440 * 2 + "px";
  //   document.getElementById("pic2").style.left = 1440 * 3 + "px";
  if (moveNum > 0) {
    moveNum--;
    console.log(moveNum);
  } else {
    moveNum = 2;
  }
  for (var i = 0; i < 3; i++) {
    document.getElementById("pic" + i).style.left =
      picWidth * (i - moveNum) + "px";
  }
};

document.getElementById("next_btn").onclick = function () {
  // document.getElementById("pic0").style.left = 1440 * -1 + "px";
  // document.getElementById("pic1").style.left = 1440 * 0 + "px";
  // document.getElementById("pic2").style.left = 1440 * 1 + "px";
  if (moveNum < 2) {
    moveNum++;
  } else {
    moveNum = 0;
  }
  for (var i = 0; i < 3; i++) {
    document.getElementById("pic" + i).style.left =
      picWidth * (i - moveNum) + "px";
  }
};

// for 반복문 for(초기값; 조건식; 증감식){}
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("종료후 :" + i);

// console.log(1);
// console.log(2);
// console.log(3);
