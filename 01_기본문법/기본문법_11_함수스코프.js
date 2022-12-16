// Scope (스코프) //

/*
스코프란 - 변수 유효 범위

* 변수를 선언하는 방법에는 < var, let, const > 가 있다.
  - var는 자바스크립트 태초부터 있었던 명령어
  - let, const는 ES2015+ 부터 생김
   
* var varVal = '함수-단위'
* const constVal = '블럭-단위'
* let letVal = '블럭-단위'
 
*함수를 console.log로 불러올때 
   - 내부에서 외부는 접근 가능
   - 외부에서 내부는 접근 불가능
*/

var globalVal = '전역변수'

function outerfunc() {
  console.log(globalVal); // output = 전역변수
  console.log(innerVal) // output = innrval is not defined => 하위 객체로는 들어갈 수 없기 때문

  function innerFunc() {
    var innerVal = '함수 내부 지역 변수'
    console.log(globalVal); // output = 전역변수
  };
  
  innerFunc()

  return num;
};