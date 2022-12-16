// Scope (스코프) //
// 이제부터는 for문을 통해서 블럭단위와 함수단위의 차이점을 알아보겟습니다 //

/*
* var = '함수-단위'
* const, let = '블럭-단위'

블럭 단위 함수는 외부에서의 접근을 허용하지 않는다.
그래서 var로 선업한 함수는 console.log로 찾을 수 있었지만 const, let으로 선언하면 찾을 수 없다.
 - 안전한 코드를 사용하기 위해서는 const나 let을 사용하는 것을 권장함
*/

if (true) {
let a = 'a'
var b = 'b'
}

console.log(a); // a is not drfined
console.log(b); // output = b
