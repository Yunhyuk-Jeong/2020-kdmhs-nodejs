// 6. 콜백 함수

// 다른 함수의 인자로 넘겨지는 함수

// 동기식 처리
function add(a, b) {
    let sum = a + b;
    return sum;
}

function print(result) {
    console.log(result);
}

print(add(2, 3));

// 비동기식 처리
function add2(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

add2(2, 3, print);

add2(2, 3, (result) => {
    console.log(result);
});