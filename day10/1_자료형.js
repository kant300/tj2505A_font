// p.513 자료형

// [숫자형] : 정수와 실수로 나누어 구분합니다.
// 1. 정수 : 소수점없는 숫자
console.log( 100 )
console.log( typeof 100)  // typeof 자료 : 자료의 자료형(종류) 반환, number
// 2. 실수 : 소수점있는 숫자, (부동소수점)실수는 정밀하게 계산이 불가능하다. -> 별도의 정밀한 함수 필요하다
console.log( 0.1 + 0.2 )

// [문자열] : '' 또는 "" 묶음 자료
console.log( typeof "100" )   // 숫자도 ""묶이면 문자열 이다.
console.log( typeof "안녕하세요")
// 1. 이스케이프문자 : 기능이 포함된 특수문자, \백슬래시 : 키보드 엔터 위에 원화기호\
console.log("\\안녕1")  //  \\  : 백슬래시 출력
console.log("\'안녕2")  //  \'  :'작은 따옴표 출력
console.log("\"안녕3")  //  \"  : "큰따옴표 출력
console.log("\n안녕4")  //  \n  : 줄바꿈 처리
console.log("\t안녕5")  //  \t  : 탭(들여쓰기) 처리

// 2. 템플릿 리터럴 : `(백틱) 키보드 왼쪽[tab]키 위에 , 변수나 식을 넣을때는 ${ }
1 + 3      // 4, 연산은 결과/반환 는 항상 하나이다.
"안녕" + "자바" // "안녕자바", 문자열이 포함된 +더하기는 연결연산자로 사용된다.
console.log( "안녕" + "자바" )          // +연결연산자 이용한 자료 합치기
console.log( `${"안녕"}${"자바"}` )     // ``묶음 으로 자료 합치기 

//* 변수와 활용
let name = 'kim';
let classRoom = 204;
// 방법1 : 변수명 + "문자열" + 변수명 + "문자열"
console.log( name + "님" , + classRoom + "호 강의실로 입장하세요.")
// 방법2 

// 3. [논리형] : true(참) 이나 false(거짓)의 값을 표현
console.log( true )
console.log( false )

// 4. [undifined , null ]
//1. undifined : 자료형이 정의되 않았을때 데이터 상태
let 과일상자;           //변수를 선언하고 자료를 대입하지 않았다.
console.log( 과일상자 ) //자료가 없는 변수를 호출하면 undifened
//2. null : 데이터의 값이 유효하지 않은 상태
let 채소상자 = null;   //변수에 null이 대입/저장된 상태, 라이브러리 함수들이 null 반환하는 경우가 많다.
console.log( 채소상자 )//변수에 null일 경우에는 null (자료가 부존재, 유효하지 않다)

// [배열] : 하나의 변수에 값을  여러개 저장,  ,(쉼표)구분해서 대괄호[] 묶는다.
// 공백도 배열이다.
let season = [ "봄", "여름", "가을", "겨울"]
             // 0  ,   1  ,    2  ,   3     길이/총개수는 4이다.
// - 나열 : 열거하기 위해 하나씩 줄로 하는것,  -열거 : 여러가지를 낱낱이 늘어놓음
// 1. 인덱스 : 순서대로 배정된 번호, 번호는 0번부터 시작
// 2. 배열 호출하는 법
    // (1) 
    console.log( season )
    // (2) 배열내 특정한 인덱의 요소 반환
    console.log( season[0] ) //봄
    console.log( season[1] ) //여름
    console.log( season[2] ) //가을
    console.log( season[3] ) //겨울
    console.log( season[4] ) //undefined, 존재하지 않은 인덱스이므로
    //*[생각해보기1] 변수개수 : 1(season) , 리터럴개수:4(봄,여름,가을,겨울) ,
    //  타입개수: 2(배열1, 문자4)    , 변수가 갖는 자료개수:1(배열)
    // ***** 변수 -> 배열 -> 문자열4개   ** 변수에 인덱스를 써서 자료를 꺼낸다.
    // ***** 사람 -> 가방 -> 핸드폰,지갑,책  ** 사람이 가방을 열고 핸드폰을 꺼낸다.
    // [ [ ] ] 배열안에 배열을 넣을수 있다.

// 3. 배열수정
    // (1) 배열 전체 수정 , 변수명 = [새로운배열]
    season = [ "유재석", "강호동" ]
    console.log( season )
    // (2) 배열내 특정요소 수정, 변수명[인덱스] = 새로운값
    season[1] = "신동엽"
    console.log( season )

// 4. 배열내 요소추가 , 변수명.push(새로운값) , 뒤에서 부터 추가된다.    
season.push( "서장훈" )
console.log( season )

// 5. 배열내 요소삭제 , 변수명.splice( 인덱스, 개수 )
season.splice( 0 , 1 ) // 0번 인덱스부터 1개 삭제
console.log( season )

// 6. 배열내 특정요소 찾기 , 변수명,indexOf( 찾을값 ) , 찾을값이 배열내 존재하면 인덱스번호, 없으면 -1 반환
console.log( season.indexOf ("유재석") ) //-1
console.log( season.indexOf( "신동엽") ) //0 , 찾을 값이 0번 인덱스에 있다.
let result = season.indexOf("서장훈")
console.log( result )

느슨한 자료형 체크  강력 자료형체크하기 위해 type script를 