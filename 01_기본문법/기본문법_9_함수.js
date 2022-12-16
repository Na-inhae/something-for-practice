// 개념 //
// 함수 선언문 //
function func(num) { // func(함수)를 계산할 것이다.
  if (10 > num) { // if문을 활용 - 만약 num이 10보다 작을 때
    return 'Hello'; // return 값으로 Hello를 반환해라
  }
};

// 함수호출 //
console.log(func(1)); // num에 1대입함 => output = Hello
console.log(func(5)); // num에 5대입함 => output = Hello
console.log(func(11)); // num에 11대입함 => output = undifined // 값이 만족하지 못하면 자동으로 undifined가 호출됨



// 더하기 , 곱하기 //
// 함수 선언문 //
function sum(num1, num2) {
  return num1 + num2;
}

function multiple(num1, num2) {
  return num1 * num2;
}

console.log(sum(2,5));
console.log(multiple(2,5));
