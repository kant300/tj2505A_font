// 1. prompt()를 사용하여 사용자정보 입력받기
const userName = prompt( "사용자의 이름을 입력해주세요" );
const exerciseType = prompt( " 오늘 운동한 종류를 입력해주세요" );
const exerciseMinutes = prompt( "운동 시간(분)을 입력해주세요" );

// 2. 분당 소모 칼로리 설정 (예: 1분당 7칼로리)
const caloriesPerMinute = 7;

// 3. 총 소모 칼로리 계산 : 운동 시간(분) * 분당 소모 칼로리
const totalCalories = exerciseMinutes * caloriesPerMinute

// 4. console.log()를 사용하여 정해진 형식으로 운동 기록을 콘솔에 출력
console.log( "[운동 기록]");
console.log( "이름");
console.log( userName );
console.log( "운동종류");
console.log( exerciseType );
console.log( "운동시간");
console.log( exerciseMinutes );
console.log( "칼로리" );
console.log( totalCalories );
