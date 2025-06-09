
// 2_출력함수.js
// - HTML과 CSS 와 달리 JS는 프로그램밍언어 이다.
// - 명령이나 연산을 기계와 소통하는 언어 뜻

10 // 10 이라는 리터럴 값이면서 숫자자료형이다.
3.14 // 3.14라는 리터럴 값이면서 숮자자료형이다.
"안녕하세요" // 안녕하세요 라는 리터럴 값이면서 문자열 자료형이다.
true  // true 이라는 러터럴 값이면서 불리언 자료형이다.
[ 10 , 3.14 , "안녕하세요" , true ] // [ ]안에 여러개 리터럴 값을 포함하는 배열 자료형이다.

// === 출력해 !!! 명령어 , 함수 (미리 만들어진 코드 ) ===
// [ 출력함수 ] :
// 1. console.log( 출력할자료 )    : 개발자도구 F12에서 console 텝에 출력된다.
console.log( 10 )
console.log( "안녕하세요" )

// 2. alert( 출력할 자료 ) :  브라우저(크롬) 알림창을 출력된다.
alert( 3.14 )
alert( true )

// 3. document.write( HTML )   : document(HTML파일).write(쓰다) : html 문서에 출력한다.
document.write( "<h3> JS에서 작성한 HTML입니다. </h3>" )

// 4. document.querySelectior( "선택자").innerHTML = HTML  : 특정한 선택자(마크업, CLASS, ID )의 출력한다.
    // -> innerHTML : <마크업> (여기가 inner) </마크업> : 마크업사이
document.querySelector( "h3" ).innerHTML ="<h3> 특정한 선택자 HTML 작성합니다. </h3>"