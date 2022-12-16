////
/*
 * DOM 이란? 
 : 문서 객체 모델 (The Document Object Model, 이하 DOM)은 HTML, XML 문서의 프로그래민 Interface이다.
 */

const h2Element = document.querySelector('h2');
const pElement = document.querySelector('p');

function replaceH2Text() {
  h2Element.innerText = '안녕하세요 :)'
}

h2Element.addEventListener('click', replaceH2Text);
pElement.addEventListener('click', replaceH2Text);


// golive 에서 '반갑습니다 or 본 수업은 ~'을 클릭하면 '안녕하세요가 반갑습니다'로 변함