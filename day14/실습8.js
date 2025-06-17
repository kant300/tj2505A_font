/*
[실습8]
문제 1: prompt로 제품 정보 객체 만들기
prompt를 세 번 사용하여 사용자로부터 '제품명', '가격', '제조사'을 순서대로 입력받습니다. 
입력받은 정보로 하나의 product 객체를 생성하고, 생성된 객체를 콘솔에 출력하시오.

let pname = prompt( '제품명 : ')
let pprice = prompt ( '가격 : ') 
let pmanufact = prompt( '제조사 : ')
//방법1  :배열일때
//const array = [ pname , pprice , pmanufact ]
//방법2 : 객체일때
//const obj1 = { 'pname' : pname , 'pprice' : pprice , 'pmanufact' : pmanufact }
//* 만일 속성명과 자료으 변수명이 일치하면 **속성명 생략가능** , 자동으로 변수명을 속성명으로 정의한다.
const obj2 = {  pname ,  pprice ,  pmanufact };
console.log(array);  console.log(obj1);     console.log(obj2);
*/


/*
문제 2: prompt로 회원 가입 및 아이디 중복 확인 기능 구현
prompt를 세 번 사용하여 사용자로부터 '아이디', '비밀번호', '이름'을 순서대로 입력받습니다.
입력받은 정보로 하나의 member 객체를 생성하고, members 배열에 저장하여 배열을 콘솔에 출력하시오.
단] 입력받은 아이디가 이미 배열에 존재하면 '존재하는 아이디 입니다'를 출력하고 배열에 등록하지 않습니다.
const members = [
  { id: 'user1', password: 'pass1', name: '사용자1' },
  { id: 'user2', password: 'pass2', name: '사용자2' },
];

const members = [
  { id: 'user1', password: 'pass1', name: '사용자1' },
  { id: 'user2', password: 'pass2', name: '사용자2' },
];
//1. prompt를 세 번 사용 : '아이디', '비밀번호', '이름'을 순서대로 입력받습니다.
let id = prompt( '아이디 : ' );
let pwd = prompt(' 비밀번호 : ' );
let name = prompt( '이름 : ' );
//2. 입력받은 정보(여러변수)로 하나의 member 객체 
let member = { } // (1)객체생성, 객체내  속성 추가해야 하므로 *변수에 저장*
member.id = id; // (2) 객체내 새로운 속성명에 입력받은 값 대입
member.pwd = pwd;
member.name =name; //let member = { userid : userid , userpwd : userpwd , username : username }
// let member = [ ]; member.push(userid)
  // *입력받은 아이디가 이미 배열 존재여부
  // 1. 배열내 모든 객체 하나씩 (조회)꺼낸다.
let idCheck =false; // 중복이 있다(true)/없다(false) 기억하기 위한 변수
for( let index = 0 ; index <= members.length -1 ; index++){
  let member = members[index]; //index번째의 member 객체 꺼내기(조회)
  // 2. 객체내 userid 속성값이 입력받은 값과 비교
  if( member.id == id ){ //index번째의 member객체내 id속성값이 입력받은 userid와 같으면
    idCheck = true; //중복체크!!!
    break; //반복문 종료
  } //***** 아직 모두 조회된 상태가 아니므로 for문 안에서 배열에 저장하지 않는다.****
} //for end
if (idCheck == false ){
    members.push(member);
    console.log('등록성공')
} else{
    console.log('등록실패')
}
comsole.log(members);




1. prompt를 세 번 사용 : '아이디', '비밀번호', '이름'을 순서대로 입력받습니다.

  2. 입력받은 정보로 하나의 member 객체 -- 입력받은 아이디가 이미 배열 존재여부
  3. member 객체, members 배열에 저장
  4. members 배열을 콘솔에 출력하시오.
*/


/*
문제 3: 객체 배열의 속성 값 평균 구하기
scores 배열에 담긴 모든 학생의 수학(math) 점수 평균을 계산하여 콘솔에 출력하시오.
const scores = [
  { name: 'A', math: 80, science: 92 },
  { name: 'B', math: 95, science: 88 },
  { name: 'C', math: 76, science: 78 }
];
*/
const scores = [
  { name: 'A', math: 80, science: 92 },
  { name: 'B', math: 95, science: 88 },
  { name: 'C', math: 76, science: 78 }
];
//------------반복문 없이----------
let 학생객체1 = scores[0]
let 학생객체2 = scores[1]
let 학생객체3 = scores[2]
let 학생1수학점수 = 학생객체1.math; //80
let 학생2수학점수 = 학생객체2.math; //95
let 학생3수학점수 = 학생객체3.math; //76
let 합계 = 학생1수학점수 + 학생2수학점수 + 학생3수학점수; //80+95+76
let 인원수 = scores.length //3
let 평균 = 합계/인원수
//----------반복문 풀이-----------
let sum = 0 ; //객체들의 math를 누적합계를 저장하기 위한 변수. let은 초기화의미
for( let index = 0 ; index <= scores.length -1 ; index++ ){ //0부터 마지막 인덱스까지 1씩증가
    let 학생객체 = scores[index]; //index번째 학생객체 호출
    sum += 학생객체.math; // index번째 학생객체의 수학점수 속성값 호출하여  sum에 누적
} // for end
console.log(sum / scores.length); //합계 / 3( 배열길이= 객체개수=인원수)

/*
문제 4: 특정 조건을 만족하는 객체 찾기
products 배열에서 id가 3인 상품 객체를 찾아, 해당 객체 전체를 콘솔에 출력하시오. 
일치하는 객체가 없으면 "상품을 찾을 수 없습니다."를 출력합니다.
const products = [{ id: 1, name: '사과' },{ id: 2, name: '바나나' },{ id: 3, name: '포도' },{ id: 4, name: '딸기' }];
*/
const products = [{ id: 1, name: '사과' },{ id: 2, name: '바나나' },{ id: 3, name: '포도' },{ id: 4, name: '딸기' }];
let idCheck = false



/*
문제 5: 객체 배열 필터링하기
users 배열에서 isActive가 true인 사용자들만으로 구성된 새로운 배열 activeUsers를 만들고, 
이 배열을 콘솔에 출력하시오.
const users = [
  { id: 1, name: '유저1', isActive: true },
  { id: 2, name: '유저2', isActive: false },
  { id: 3, name: '유저3', isActive: true },
  { id: 4, name: '유저4', isActive: false }
];

const users = [
  { id: 1, name: '유저1', isActive: true },
  { id: 2, name: '유저2', isActive: false },
  { id: 3, name: '유저3', isActive: true },
  { id: 4, name: '유저4', isActive: false }
];
//-----반복문 없이
const activeUser=[ ]//새로운 배열 인 빈배열 선언
if( users[0].isActive == true ) activeUser.push( users[0] )


//-----반복문활용
for( let index = 0 ; index <= users.length -1 ; index++ ){
    if( user[index]isActive == true ){ activeUser.push( users[i]); }
}
*/


/*
문제 6: 객체 배열 데이터 변환하기
movies 배열에 있는 각 영화 객체에서 title 속성만 추출하여, 영화 제목들로만 이루어진 새로운 배열 movieTitles를 만들고 콘솔에 출력하시오.
const movies = [
  { title: '인셉션', director: '크리스토퍼 놀란' },
  { title: '기생충', director: '봉준호' },
  { title: '매트릭스', director: '워쇼스키 자매' }
];

const movies = [
  { title: '인셉션', director: '크리스토퍼 놀란' },
  { title: '기생충', director: '봉준호' },
  { title: '매트릭스', director: '워쇼스키 자매' }
];
//----반복문없이------



//------반복문활용------


*/


/*
문제 7: 데이터 그룹화하기
다음 team 배열을 department를 기준으로 그룹화하여, 아래 result와 같은 형태로 만드시오.
const team = [
  { name: '철수', department: '개발팀' },
  { name: '영희', department: '기획팀' },
  { name: '민수', department: '개발팀' },
  { name: '지혜', department: '기획팀' }
];
// 최종 결과 형태 (result)
// { '개발팀': ['철수', '민수'], '기획팀': ['영희', '지혜'] }
*/
const team = [
  { name: '철수', department: '개발팀' },
  { name: '영희', department: '기획팀' },
  { name: '민수', department: '개발팀' },
  { name: '지혜', department: '기획팀' }
];
//방법1
let result = { '개발팀': [ ], '기획팀': [ ] }; // 빈배열(부서)2개를 갖는 객체생성

for( let index = 0 ; index <= team.length - 1 ; index++ ){
    let t = team[index]; //index번째 객체 호출
    if ( t.department == '개발팀' ){ //index번째 객체 부서가 '개발팀'
        result.개발팀.push( t.name ); //결과객체내 개발팀 배열에 index번째 객체의 이름저장
    }else if( t.department == '기획팀'){
      result.기획팀.push( t.name );
    }
} //for end
console.log(result);
// 방법2
let result2 = { }; //미리 부섬ㅇ을 작성하지 않은 상태
for( let index = 0 ; index <= team.length -1 ; index++ ){
    let t = team[index];
    if( result2[ t.department ] ){ //result2에 index번째의 부서명이 존재하면 true/ 존재하지 않으면 false
        result2[ t.department ].push( t.name ); //부서명 배열에 index번째 이름 넣어준다.
    }else{ //존재하지 않으면 새로운 배열 생성하고 초기값으로 index번째 이름 넣어준다.
        result2[ t.department ] = [ t.name ]; //배열생성
    }
}

//*if ( 객체변수.속성명 ){ }//지정한 객체내 속성명이 존재하면 true, 존재하지 않으며 false



/*
문제 8: 장바구니 총액 계산하기
고객의 장바구니 정보를 담은 cart 배열과 상품 정보를 담은 productsInfo 배열이 있습니다.
cart 배열: 각 요소는 고객이 담은 상품의 id와 quantity(수량)를 가집니다.
productsInfo 배열: 각 요소는 상품의 고유 id와 price(가격)를 가집니다.
cart 배열을 기준으로, 장바구니에 담긴 모든 상품의 총 결제 금액을 계산하여 콘솔에 출력하세요.
const cart = [{ id: 1, quantity: 2 },{ id: 3, quantity: 1 }];
const productsInfo = [
  { id: 1, price: 1000 },
  { id: 2, price: 5000 }, // 장바구니에 없는 상품
  { id: 3, price: 2500 }
];

문제 9: 투표 결과 집계하기
다음 votes 배열은 투표 결과를 나타냅니다. 각 후보가 몇 표를 받았는지 집계하여, 후보의 이름이 키이고 득표수가 값인 객체를 만들어 콘솔에 출력하시오.
const votes = ['A', 'B', 'B', 'C', 'A', 'B', 'A'];
// 출력 예시: { A: 3, B: 3, C: 1 }

문제 10: 웹툰 평점 시각화하기
webtoons 배열의 데이터를 이용하여, 각 웹툰의 평점을 별(★, ☆)로 시각화하여 HTML에 출력하시오.
조건 1: 평점(rating)은 10점 만점입니다.
조건 2: 평점의 정수 부분만큼 꽉 찬 별(★)을, 10 - 정수 만큼 빈 별(☆)을 출력합니다. (예: 평점이 8.5이면 ★ 8개, ☆ 2개)
조건 3: HTML에 웹툰 제목과 변환된 별점을 한 줄씩 출력합니다.
const webtoons = [
  { title: '나 혼자만 레벨업', rating: 9.8 },
  { title: '유미의 세포들', rating: 9.9 },
  { title: '전지적 독자 시점', rating: 9.7 }
];
/* HTML 출력 예시:
   나 혼자만 레벨업 ★★★★★★★★★☆
   유미의 세포들 ★★★★★★★★★☆
   전지적 독자 시점 ★★★★★★★★★☆
*/



/*
문제11 : 공공데이터 포털 : 인천 부평구 맛집 현황 테이블 만들기
[구현 조건]
  1. 공공데이터 포털에서 '인천광역시 부평구_맛있는 집(맛집) 현황' 의 open API 신청하여 결과를 복사하여 'response' 변수에 저장하시오.
  let response = {}
  2. response 객체 안의 data 배열을 반복문을 사용하여 순회합니다.
  3. 각 동(행)의 정보를 표시할 HTML <table> 태그를 문자열로 만듭니다.
  4. 테이블의 각 셀에는 '업 소 명', '세대수', '소재지', '지정메뉴', '전화번호','업태' 정보가 순서대로 포함되어야 합니다.
  5. 최종적으로 완성된 HTML 테이블 문자열을 document.write() 사용하여 화면에 출력합니다.
[ 공공데이터 open API 신청 ]
  1. 공공데이터 포털 : https://www.data.go.kr
  2. 회원가입/로그인
  3. '부평구 맛집' 검색
  4. '인천광역시 부평구_맛있는 집(맛집) 현황' Open API를 찾아 [활용신청] 버튼을 누르고, 절차에 따라 인증키를 발급받습니다.
  5. 인증키 설정 ( Encoding , Decoding 순서대로 대입하여 설정 )
  6. 인증키 설정 후 'API 목록' 에서  [Open Api 호출] 합니다.
  7. **실행 결과(JSON)**를 전체 복사합니다.  
  */