/*
[ interval ] : 간격
    1. 정의 : 시간적인 간격에 따라 특정 함수 실행
    2. 사용법 
        (1) setInterval( 함수명  , 밀리초 )
            - 함수명 : 함수명 만 작성한다. ()생략하여 실행하지 않는다.
            - 밀리초 : 1:1000초 , 1000:1초 , 10000:10초 , 100:0.1초
                -> 반환값( 함수실행후 돌려주는 /반환/ 결과)
                let 변수 = setInterval();

        (2) clearInterval( interval객체 ); 중지할 객체
            - 중지할 interval 객체를 대입하여 해당 interval 중지하는 함수 


*/
//[1] 예제1
let value = 0;//전역변수
function 증가함수(){  //value 1증가 함수 후 출력선언
    // 1. 전역변수 1증가
    value = value + 1 // vs value += 1 vs value++
    //2. 특정한 위치에 전역변수 값 대입
        // 어디에, <h3 id="box1"> </h3>
    const box1 = document.querySelector('#box1')
        // 무엇을, value값을
    let html = value;
        // 대입
    box1.innerHTML = html;                

} //f end
//=========== ** 간격(1초)에 따른 '증가함수' 재실행 **
setInterval( 증가함수, 1000 ); //1000밀리초(1초) 간격으로 '증가함수'실행
//[2] 예제2
function 시계함수(){
    // 1. 현재 시간/시간을 구하기 :
    let today = new Date();
    let hour = today.getHours();        // '시' 반환
    let minute = today.getMinutes();    // '분' 반환
    let second = today.getSeconds();    // '초' 반환
    // 2. 
    const box2 = document.querySelector( '#box2' ); //(1)
    let html = `${ hour } : ${ minute } : ${ second }`; 
    box2.innerHTML = html; //(3)

} //f end
// *** 1초마다 시계함수 호출하기 ***
setInterval( 시계함수, 1000 );

// [3] 예제3
let time = 0 ; // 현재 타이머의 초
let timerId;    //변수만 선언, 추후에 interval 객체저장
// (1) 
function 시간증가(){
    time++; // 1증가
    document.querySelector('#box3').innerHTML = time; //출력
}
// (2)
function 타이머시작(){
    //전역변수에 interval 객체 저장.
    //전역변수 사용이유 : 서로 다른 함수에서 공통변수를 사용이 가능하다.
    // vs 지역변수 : 함수안에서만 사용한다.
    timerId = setInterval( 시간증가 , 1000 ); // 1초마다 '시간증가'함수 실행
} // f end
// (3) 
function 타이머중지(){
    clearInterval( timerId );
}//f end

