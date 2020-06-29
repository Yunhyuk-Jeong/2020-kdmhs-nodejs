//* 2. 배열
//* 배열 선언

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); //* 5
console.log(arr[2]); //* 3

let arr2 = [1, 2, "apple", "banana"];

//* 반복문
for (i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

//* for-in
for (i in arr2) {
  console.log(i); //* index return
}

//* for-of (ES6)
for (i of arr2) {
  console.log(i);
}

//* splice
//* index, howmany(삭제), elements(추가)
let a = ["a", "b", "c"];
//* a, d, b, c
a.splice(1, 0, "d");
console.log(a);

//* 현재) a, d, b, c
//* 결과) a, x, y, c

a.splice(1, 2, "x", "y");
console.log(a);
