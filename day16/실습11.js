/*
함수란 ? 미리 정의한 *코드*를 *재사용(재호출)* 함으로써 효율적으로 로직 가능[메모리관리]


[ 실습11 ]
실습 1: 성인 인증 함수
나이(age)를 매개변수로 받아, 20세 이상이면 true를, 
미만이면 false를 반환하는 isAdult 함수를 만드세요. 
isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력해 보세요.
1.매개변수  age
2.반환값  true / false
3.처리할명령어  20세 이상이면 true를, 미만이면 false
*/
function isAdult( age ){ //함수정의
    if( age >=20 ){ return true; //20세 이상이면 true
    }else{ return false; } // 미만이면 false
}//func end
//isAdult( 25 );//함수호출
let result = isAdult( 25 )// 함수호출1 후 저장하고 출력
console.log( result);
console.log( isAdult( 17 ) );//함수호출2 후 저장안하고 출력



/*
실습 2: 배열의 총합 구하기
숫자로 이루어진 배열을 매개변수로 받아, 
for 반복문을 사용해 모든 요소의 합계를 구하여 반환하는 sumArray 함수를 만드세요.
 아래 numbers 배열로 테스트해 보세요.
const numbers = [10, 20, 30, 40, 50];
1.매개변수  array 배열
2.반환값   배열의 총합계
3.처리할명령어  for이용한 배열의 총합계구하기
*/
const numbers = [10, 20, 30, 40, 50];
function sumArray( array ){ //함수정의
    let sum = 0; //
    for( index = 0 ; index <=  array.length - 1 ; index++ ){
        sum += array[index];
    }
    return sum; //누적합계를 반환한다. --> sumArray() 호출된곳으로 반환
}
sumArray( numbers );
let sum = sumArray( numbers);
console.log( sum );




/*
실습 3: 가장 긴 단어 찾기
문자열로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 
가장 긴 단어를 찾아 반환하는 findLongestWord 함수를 만드세요. 아래 words 배열로 테스트해 보세요.
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
1.매개변수  array  :함수{ }안으로 들어오는 자료를 저장하는 변수
2.반환값   배열내 가장 긴 단어  : 함수{ }가 종료되면서 *함수호출*했던 곳으로 반환하는 자료
3.처리할명령어   매개변수 배열내 가장 깉단어 찾기 for 사용        : 함수{ }가 실행되면서 실행한 코드들
*/
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
function findLongestWord( array ){ //함수정의
    //array.push( 'melon');
    //array = 'melon';
    let longWord = '' ; //가장 긴 단어를 저장하는 변수
    for( index = 0 ; index <= array.length -1 ; index++ ){
        let word = array[ index ];
        //
        if( word.length > longWord.length ){ longWord = word; }
    } //for end
    return longWord; // 함수가 종료되면서 함수를 호출했던 곳으로 반환하는 값
} //fund end
let result1 = findLongestWord( words ); //배열(객체)도 객체이다.
console.log( result1 );


/*
실습 4: 게임 점수 관리하기
let userScore = 0; 전역 변수를 만드세요. gainScore() 함수는 userScore를 10 증가시키고, 
loseScore() 함수는 5 감소시킵니다.
gainScore()를 세 번, loseScore()를 한 번 호출한 뒤, 최종 점수를 콘솔에 출력하세요.
1.매개변수   X   :함수{ }안으로 들어오는 자료를 저장하는 변수(여러개 가능)
2.반환값   x  : 함수{ }가 종료되면서 *함수호출*했던 곳으로 반환하는 자료(하나의 값)
3.처리할명령어  gainScore() 함수는 userScore를 10 증가 , loseScore() 함수는 5 감소 : 함수{ }가 실행되면서 실행한 코드들
*/

/*let userScore = 0; 
function gainScore( userScore ){
    retrun userScore + 10;
}
function loseScore( userScore ){
    return userScore - 5;
}
let result = gainScore( );
gainScore( );
gainScore( );
loseScore( );
console.log( result );

1.매개변수 (gainScore)  x
2.반환값 (gainScore)  x
3.처리할명령어(gainScore)   전역변수(userScore)를 10증가

1.매개변수 (looseScore)  x
2.반환값 (looseScore)  x
3.처리할명령어(looseScore)   전역변수(userScore)를 5감소
*/
let userScore = 0; 
function gainScore( ){
    userScore += 10;
}
function looseScore( ){
    userScore -= 5;
}
gainScore( );
gainScore( );
gainScore( );
looseScore( );
console.log(userScore);

/*
실습 5: 최고 점수 학생 찾기
전역변수 students 배열 데이터를 이용하여 , 가장 높은 점수(score)를 가진 
학생의 이름을 찾아 반환하는 findTopStudent 함수를 만드세요.
const students = [
  { name: '김철수', score: 85 },
  { name: '이영희', score: 92 },
  { name: '박민준', score: 78 }
];
1.매개변수 array   :함수{ }안으로 들어오는 자료를 저장하는 변수(여러개 가능)
2.반환값  가장 높은 점수 : 함수{ }가 종료되면서 *함수호출*했던 곳으로 반환하는 자료(하나의 값)
3.처리할명령어 가장 높은 점수(score)를 가진 학생의 이름을 찾아   for : 함수{ }가 실행되면서 실행한 코드들

const students = [
  { name: '김철수', score: 85 },
  { name: '이영희', score: 92 },
  { name: '박민준', score: 78 }
];

function findTopStudent( array ){
    let topScore = 0;
    let topStudent = [ students.score ]
    for( index = 0 ; index <= students.length - 1 ; index++ ){
        if(  students.score > topStudent.score ){
            console.log( students.name);
        }
    }
}
findTopStudent(students.name);

function findTopStudent( array ){
    let topScore = 0;
    for( index = 0 ; index <= students.length - 1 ; index++ ){

    }

}        
*/



/*
실습 6: 상품 목록 페이지 만들기 (참고: 예제 6, 7, 8, 12)
전역변수 products 배열 데이터를 이용하여, 각 상품을 소개하는 HTML 요소를 동적으로 만들어 
페이지에 표시하는 renderProducts 함수를 만드세요.
각 상품은 이름(<h4>), 가격(<p>), 재고(<p>)를 포함한 div로 묶여야 합니다.
const products = [
  { name: '노트북', price: 1200000, stock: 5 },
  { name: '모니터', price: 350000, stock: 12 },
  { name: '키보드', price: 80000, stock: 25 }
1.매개변수    :함수{ }안으로 들어오는 자료를 저장하는 변수(여러개 가능)
2.반환값   x  : 함수{ }가 종료되면서 *함수호출*했던 곳으로 반환하는 자료(하나의 값)
3.처리할명령어 : 함수{ }가 실행되면서 실행한 코드들

];
*/



/*
실습 7: 간단한 계산기
num1, num2, operator ( '+', '-') 세 개의 매개변수를 받는 calculator 함수를 만드시오.
operator가 '+'이면 두 수의 합을, '-'이면 두 수의 차를 콘솔에 출력하시오. (if문 사용)
1.매개변수 num1, num2, operator    :함수{ }안으로 들어오는 자료를 저장하는 변수(여러개 가능)
2.반환값   x  : 함수{ }가 종료되면서 *함수호출*했던 곳으로 반환하는 자료(하나의 값)
3.처리할명령어 operator가 '+'이면 두 수의 합을, '-'이면 두 수의 차 : 함수{ }가 실행되면서 실행한 코드들

*/

//function calculator( num1, num2, operator )
  



/*
실습 8: HTML 리스트(ul, li) 동적 생성
todoList라는 할 일 목록이 담긴 전역 배열이 있습니다.
renderList() 함수를 정의하시오. 이 함수는 todoList 배열을 순회하며 <li>할 일 내용</li> 형태의 HTML 문자열을 만듭니다.
최종적으로 이 문자열을 HTML <ul> 태그로 표현하여 리스트를 화면에 그리시오.
let todoList = ['장보기', '운동하기']
*/



/*
실습 9: 입장료 계산 함수
임의의 나이(age)를 매개변수로 받아 입장료를 반환하는 getTicketPrice 함수를 만드시오.
8세 미만: "무료"
8세 이상 19세 이하: "5,000원"
20세 이상: "10,000원"
계산된 가격 문자열을 반환(return)하시오.
1.매개변수  age
2.반환값  입장료반환
3.처리할명령어  

*/
function getTicketPrice( age ){
    if( age < 8 ){
        
    }

    }
}