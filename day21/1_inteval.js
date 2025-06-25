/*
[ interval ] : 간격
    1. 정의 : 시간적인 간격에 따라 특정 함수 실행
    2. 사용법 
        (1) setInterval( 함수명  , 밀리초 )
            - 함수명 : 함수명 만 작성한다. ()생략하여 실행하지 않는다.
            - 밀리초 : 1:1000초 , 1000:1초 , 10000:10초 , 100:0.1초


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