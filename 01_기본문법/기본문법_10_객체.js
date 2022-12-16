/* 객체란?
'나라는 사란을 프로그래밍으로 표현하자면?' */

const Inhae = {
  // 속성 (key, property) : value => 이 묶음을 객체라고 부름
  name : { // 객체
    first : 'In-Hae',
    last : 'Na',
  },
  age : 26, // 객체
  gender : 'female', // 객체
  introduce : function(guest) { // 객체 & 메서드
    return 'hello ' + guest +  ' my name is inhae' // 객체에서 어떠한 속성이 함수를 가지고 잇는 것을 '메서드'라고 부른다. //
  },
  hobby: ['Watching Youtube'],// 객체
};

// 활용방법 //
console.log(Inhae.name.first); // 하위 개념에 접근 하고 싶을때 .을 사용 //
console.log(Inhae['name']['first']); // 하위 개념에 접근 하고 싶을때 []을 사용 //

console.log(Inhae.age);

console.log(Inhae.introduce('kim')); // 함수를 불러올때 'guest'는 '인자'라고 부름

