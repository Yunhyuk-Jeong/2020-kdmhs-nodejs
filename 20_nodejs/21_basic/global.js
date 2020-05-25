console.log("Hello, Node.js");
global.console.log("Hello, Node.js"); // 동일한 코드

// console 객체

// console.log(): 콘솔에 로그 메시지 출력
// console.time(label) : 시간 측정 시작
// console.timeEnd(label) : 시간 측정 종료

// log로 출력시 지정한 포맷보다 변수가 많으면 그대로 출력하고,
// 변수가 부족하다면 특수 문자를 출력합니다.

console.log("%d + %d = %d", 1, 2, 1 + 2); // > 1 + 2 = 3
console.log("%d + %d = %d", 1, 2, 1 + 2, 4); // > 1 + 2 = 3 4
console.log("%d + %d = %d", 1, 2); // > 1 + 2 = %d

console.time("time"); // 측정 시작 시간
console.timeEnd("time"); // 측정 종료 시간
// time: 0.097ms
