//* 1. 변수
//* 변수 선언
var a = 1;
var b = 2;

console.log(a, b);
console.log("%d %d", a, b);

var s1 = "Hello";
var s2 = "World";
//* Hello World

console.log(s1, s2);
console.log("%s %s", s1, s2);

console.log(typeof a); //* number
console.log(typeof s1); //* string
console.log(typeof true); //* boolean
console.log(typeof c); //* undefined
console.log(typeof {}); //* object

//* 변수 호이스팅 (hoisting)
function foo() {
  //* var a; 가 자동으로 선언된다!
  console.log(a);
  var a = 10;
  console.log(a);
}

foo();

//* ES6(2015) let, const 추가
//* var : 함수 레벨 스코프
//* -> 함수안에서 선언되면 블럭을 벗어나도 접근 가능\
//* let : 블록 레벨 스코프
function foo2() {
  if (true) {
    var tmp = 0;
    console.log("1:", tmp);
  }
  console.log("2:", tmp);

  /*
    if (true) {
        let tmp2 = 0;
        console.log("1:", tmp2);
    }
    console.log("2:", tmp2); //* error
    */
}

foo2();

const PI = 3.14;
PI++;
