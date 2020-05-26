console.log("Hello, Node.js");
global.console.log("Hello, Node.js"); // 동일한 코드

console.log("\n\n");

// console 객체 https://nodejs.org/api/console.html

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

console.log("\n\n");

// Process 객체 http://nodejs.org/api/process.html

/*
속성
process.argv: 프로그램의 매개변수 정보
process.env : 컴퓨터 환경과 관련된 정보
process.version : Node.js의 버전
process.versions : Node.js 프로세스에서 사용하는 모듈들의 버전
process.arch : 프로세서의 아키텍처
process.platform : 플랫폼의 정보

메소드
process.exit() : 프로그램 종료
process.memoryUsage() : 메모리 사용 정보
process.uptime() : 현재 프로그램이 실행된 시간
*/

console.log(process.version); // Node.js 버전
console.log(process.env); // 환경변수
console.log(process.arch); // 프로세서의 아키텍처
console.log(process.platform); // 플랫폼
console.log(process.memoryUsage()); // 메모리 사용정보
console.log(process.uptime()); // 프로그램 실행 시간

console.log("\n\n");

// Exports 객체
// 2-1 ~ 2-4
