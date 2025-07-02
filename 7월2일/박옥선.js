// 1. userList 데이터 정의
// 이 데이터는 페이지가 로드될 때 한 번만 정의됩니다.
let userList = [
    { userCode: 1, userName: '유재석', userNum: '01011112222', userEmail: 'qwe123@qwe123.com', userPwd: 'qwe123' },
    { userCode: 2, userName: '김종국', userNum: '01012345678', userEmail: 'kimjk12@example.com', userPwd: 'pass1234' },
    { userCode: 3, userName: '박명수', userNum: '01087654321', userEmail: 'parkms@example.com', userPwd: 'abc12345' },
    { userCode: 4, userName: '정형돈', userNum: '01022223333', userEmail: 'donhyung@example.com', userPwd: 'donny456' },
    { userCode: 5, userName: '하하', userNum: '01033334444', userEmail: 'haha@example.com', userPwd: 'haha5678' },
    { userCode: 6, userName: '송지효', userNum: '01044445555', userEmail: 'jihyo.song@example.com', userPwd: 'songpw99' },
    { userCode: 7, userName: '이광수', userNum: '01055556666', userEmail: 'kwangsoo@example.com', userPwd: 'kwang22' },
    { userCode: 8, userName: '전소민', userNum: '01066667777', userEmail: 'somin.jeon@example.com', userPwd: 'somin456' },
    { userCode: 9, userName: '양세찬', userNum: '01077778888', userEmail: 'yangsc@example.com', userPwd: 'yangpw78' },
    { userCode: 10, userName: '이효리', userNum: '01088889999', userEmail: 'leehl@example.com', userPwd: 'hyolee01' },
    { userCode: 11, userName: '비', userNum: '01099990000', userEmail: 'rain@rain.com', userPwd: 'rain123' },
    { userCode: 12, userName: '장도연', userNum: '01011110000', userEmail: 'jangdy@example.com', userPwd: 'doyeon12' },
    { userCode: 13, userName: '김숙', userNum: '01022221111', userEmail: 'kimsook@example.com', userPwd: 'sookpass' },
    { userCode: 14, userName: '홍진경', userNum: '01033332222', userEmail: 'hongjk@example.com', userPwd: 'hongpw88' },
    { userCode: 15, userName: '조세호', userNum: '01044443333', userEmail: 'joeho@example.com', userPwd: 'seho789' },
    { userCode: 16, userName: '강호동', userNum: '01055554444', userEmail: 'kanghd@example.com', userPwd: 'hodong99' },
    { userCode: 17, userName: '이수근', userNum: '01066665555', userEmail: 'leesg@example.com', userPwd: 'soogeun1' },
    { userCode: 18, userName: '서장훈', userNum: '01077776666', userEmail: 'seojh@example.com', userPwd: 'janghoon9' },
    { userCode: 19, userName: '김연경', userNum: '01088887777', userEmail: 'yeonkk@example.com', userPwd: 'volley22' },
    { userCode: 20, userName: '기안84', userNum: '01099998888', userEmail: 'kian84@webtoon.com', userPwd: 'kian8484' },
    { userCode: 21, userName: '이영지', userNum: '01012121212', userEmail: 'youngji@example.com', userPwd: 'ygj222' },
    { userCode: 22, userName: '유아인', userNum: '01034343434', userEmail: 'yooin@example.com', userPwd: 'yooin99' },
    { userCode: 23, userName: '정은지', userNum: '01056565656', userEmail: 'eunji@example.com', userPwd: 'pink987' },
    { userCode: 24, userName: '이찬원', userNum: '01078787878', userEmail: 'chanwon@example.com', userPwd: 'chan123' },
    { userCode: 25, userName: '임영웅', userNum: '01090909090', userEmail: 'youngwoong@example.com', userPwd: 'hero8888' },
    { userCode: 26, userName: '김범수', userNum: '01001010101', userEmail: 'bsk@example.com', userPwd: 'voice99' },
    { userCode: 27, userName: '백현', userNum: '01002020202', userEmail: 'baekhyun@exo.com', userPwd: 'exo4444' },
    { userCode: 28, userName: '아이유', userNum: '01003030303', userEmail: 'iu@dlwlrma.com', userPwd: 'iu2020' },
    { userCode: 29, userName: '태연', userNum: '01004040404', userEmail: 'taeyeon@gg.com', userPwd: 'snsd123' },
    { userCode: 30, userName: '제시', userNum: '01005050505', userEmail: 'jessie@example.com', userPwd: 'strongpw' }
];

// 2. localStorage에 userList 저장하는 함수
function saveUserListToLocalStorage() {
    // JSON.stringify(): JavaScript 객체를 JSON 문자열로 변환합니다.
    // localStorage에는 문자열만 저장할 수 있기 때문에 이 과정이 필수적입니다.
    localStorage.setItem('userList', JSON.stringify(userList));
    console.log('userList가 localStorage에 저장되었습니다.');
}

// 3. localStorage에서 userList를 불러오는 함수
function loadUserListFromLocalStorage() {
    // localStorage.getItem('userList'): 'userList'라는 키로 저장된 데이터를 가져옵니다.
    // 데이터가 없으면 null을 반환합니다.
    let storedUserList = localStorage.getItem('userList');

    if (storedUserList) {
        // JSON.parse(): JSON 문자열을 JavaScript 객체로 다시 변환합니다.
        userList = JSON.parse(storedUserList);
        console.log('userList를 localStorage에서 불러왔습니다.');
    } else {
        console.log('localStorage에 userList가 없습니다. 초기 userList를 사용합니다.');
        // localStorage에 데이터가 없으면 초기 userList를 저장합니다.
        saveUserListToLocalStorage();
    }
}

// 4. 페이지 로드 시 실행되는 함수
document.addEventListener('DOMContentLoaded', function() {
    // 페이지가 로드되면 localStorage에서 userList를 불러옵니다.
    // 이는 새로고침하거나 페이지를 다시 방문해도 데이터가 유지되도록 합니다.
    loadUserListFromLocalStorage();

    // 회원가입 버튼 클릭 이벤트 리스너 (기존 HTML에 맞춤)
    const signupForm = document.getElementById('signupForm'); // 폼 ID를 사용
    if (signupForm) {
        signupForm.addEventListener('submit', signupButtonHandler);
    } else {
        // 만약 form 태그가 없다면, 기존 방식대로 버튼에 onclick을 사용해야 합니다.
        // 하지만 위 HTML 수정에서 form 태그로 감쌌으므로, 이 else 블록은 실행되지 않습니다.
        const signupBtn = document.querySelector('.btnSignup');
        if (signupBtn) {
            signupBtn.addEventListener('click', signupButtonHandler);
        }
    }

    // 초기 userList 내용 확인 (개발자 도구 콘솔에서 확인 가능)
    console.log('현재 userList:', userList);
});

// 5. 회원가입 버튼 클릭 시 실행될 함수
function signupButtonHandler(event) {
    // 폼 제출 시 페이지 새로고침 방지 (HTML에서 form 태그로 감쌌을 경우)
    if (event) { // event 객체가 존재할 때만 preventDefault 호출
        event.preventDefault();
    }

    // 입력 필드 값 가져오기
    const userName = document.getElementById('signup_name').value;
    const userNum = document.getElementById('signup_phone').value;
    const userEmail = document.getElementById('signup_email').value;
    const userPwd = document.getElementById('signup_pwd').value;
    const confirmPwd = document.getElementById('confirmPassword').value;
    const termsAgreed = document.getElementById('termsAgreement').checked;

    // 1. 유효성 검사
    if (!userName || !userNum || !userEmail || !userPwd || !confirmPwd) {
        alert('모든 필수 입력 필드를 채워주세요.');
        return;
    }

    if (userPwd !== confirmPwd) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        document.getElementById('signup_pwd').value = '';
        document.getElementById('confirmPassword').value = '';
        document.getElementById('signup_pwd').focus();
        return;
    }

    if (!termsAgreed) {
        alert('이용약관 및 개인정보 처리방침에 동의해야 합니다.');
        return;
    }

    // 2. 이메일 중복 확인 (간단한 예시)
    const isEmailDuplicate = userList.some(user => user.userEmail === userEmail);
    if (isEmailDuplicate) {
        alert('이미 존재하는 이메일 주소입니다. 다른 이메일을 사용해주세요.');
        document.getElementById('signup_email').focus();
        return;
    }
    
    // 3. 전화번호 중복 확인 (간단한 예시)
    const isPhoneDuplicate = userList.some(user => user.userNum === userNum);
    if (isPhoneDuplicate) {
        alert('이미 등록된 전화번호입니다. 다른 전화번호를 사용해주세요.');
        document.getElementById('signup_phone').focus();
        return;
    }


    // 4. 새로운 userCode 생성 (가장 큰 userCode + 1)
    // userList가 비어있을 경우를 대비하여 기본값 0을 설정
    const lastUserCode = userList.length > 0 ? Math.max(...userList.map(user => user.userCode)) : 0;
    const newUserCode = lastUserCode + 1;

    // 5. 새로운 사용자 객체 생성
    const newUser = {
        userCode: newUserCode,
        userName: userName,
        userNum: userNum,
        userEmail: userEmail,
        userPwd: userPwd // 실제 서비스에서는 비밀번호를 암호화하여 저장해야 합니다!
    };

    // 6. userList에 새 사용자 추가
    userList.push(newUser);

    // 7. 변경된 userList를 localStorage에 다시 저장
    saveUserListToLocalStorage();

    alert('회원가입이 성공적으로 완료되었습니다!');
    console.log('새로 추가된 사용자:', newUser);
    console.log('업데이트된 userList:', userList);

    // 8. 폼 필드 초기화 (선택 사항)
    document.getElementById('signupForm').reset();
    // 또는 개별 필드 초기화
    // document.getElementById('signup_name').value = '';
    // ...
    location.href = 'http://127.0.0.1:5500/%EC%A0%95%EC%9D%80%EC%A3%BC.html'
}